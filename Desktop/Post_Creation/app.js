const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const update = require('./config/multerconfig');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/profile/upload', (req, res) => {
    res.render('profileupload');
});

app.post('/upload', isLoggedIn , update.single('image'), async (req, res) => {
    const user = await userModel.findOne({ email: req.user.email });
    user.profilepic = req.file.filename;
    await user.save();
    res.redirect('/profile');
});



app.post('/register', async (req, res) => {
    const { username, name, email, password, age } = req.body;
    const user = await userModel.findOne({ email,username });
    if(user){
        return res.status(500).send('This Email or Username already exists');
    }
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            let newuser = await userModel.create({
                username,
                name,
                email,
                password: hash,
                age
            });
            let token = jwt.sign({ email , userid: newuser._id }, 'shhhh');
            res.cookie('token', token);
            res.redirect('/login');
        });
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if(!user)    return res.status(500).send('Something went wrong');
    bcrypt.compare(password, user.password, function(err, result) {
        if(result){
            let token = jwt.sign({ email , userid: user._id }, 'shhhh');
            res.cookie('token', token);
            res.redirect('/profile');    
        }else{
            res.status(500).send('Password incorrect');
        }
    });
});

app.get('/logout', (req, res) => {
    res.cookie('token',"");
    res.redirect('/login');
});

app.get('/profile', isLoggedIn, async (req, res) => {  
    const user = await userModel.findOne({ email: req.user.email }).populate({
        path: 'posts',
        populate: {
            path: 'username', 
            model: 'user',
            select: 'username' 
        }
    });
    console.log(user);
    res.render('profile', { user });
});


app.post('/post', isLoggedIn, async (req, res) => {  
    const user = await userModel.findOne({ email: req.user.email });
    const { content } = req.body;

    if (!content) {
        return res.status(400).send('Content is required');
    }

    try {
        let post = await postModel.create({
            username: user._id,
            content
        });

        user.posts.push(post._id);
        await user.save();
        res.redirect('/profile');  // Redirect to the profile page after successful post creation
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error creating post');
    }
});

app.get('/like/:id', isLoggedIn, async (req, res) => {
    const post = await postModel.findOne({ _id: req.params.id }).populate('username');
    if(post.likes.indexOf(req.user.userid) === -1){
        post.likes.push(req.user.userid);
    }
    else{
        post.likes.splice(post.likes.indexOf(req.user.userid), 1);  
    }
    await post.save();
    res.redirect('/profile');
});

app.get('/edit/:id', isLoggedIn, async (req, res) => {
    const post = await postModel.findOne({ _id: req.params.id });
    res.render('edit', { post });
});

app.post('/update/:id', isLoggedIn, async (req, res) => {
    const post = await postModel.findOne({ _id: req.params.id });
    const { content } = req.body;
    post.content = content;
    await post.save();
    res.redirect('/profile');
});


function isLoggedIn(req, res, next){
    let token = req.cookies.token;
    if(token === "") return res.status(500).redirect('/login');
    else{
        let data = jwt.verify(token, 'shhhh');
        req.user = data;
        next()
    }
    }


app.listen(3000)