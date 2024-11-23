import React from 'react'
import Navbar from './components/Navbar.'
import Form from './components/Form'
import Card from './components/Card';
import Api from './components/Api';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Installation from './pages/Installation';
import Docs from './pages/Docs';
import Community from './pages/Community';
import Header from './components/Header';
import Footer from './components/Footer';





const App = () => {
  const users = [
    {
        "name": "Aarav Sharma",
        "age": 29,
        "work": "Software Developer",
        "photo": "https://example.com/photos/aarav.jpg"
    },
    {
        "name": "Priya Verma",
        "age": 27,
        "work": "Content Writer",
        "photo": "https://example.com/photos/priya.jpg"
    },
    {
        "name": "Rohan Gupta",
        "age": 32,
        "work": "Mechanical Engineer",
        "photo": "https://example.com/photos/rohan.jpg"
    },
    {
        "name": "Sneha Iyer",
        "age": 25,
        "work": "Graphic Designer",
        "photo": "https://example.com/photos/sneha.jpg"
    },
    {
        "name": "Vikram Singh",
        "age": 38,
        "work": "Entrepreneur",
        "photo": "https://example.com/photos/vikram.jpg"
    }
]

  return (
  // <div>
  //     <Navbar />
  //   <div className='p-10'>
  //     {users.map(function(elem,idx){
  //       return <Card key={idx} name={elem.name} age={elem.age} work={elem.work} photo={elem.photo} />
  //     })}
  //   </div>
  //   <Form/>
  //   <Api/> --------[ for routes npm i react-router-dom ]--------
  // </div>
  <div>
    <Header/>
  <Routes> 
    <Route path='/' element={<Home/>} />
    <Route path='/installation' element={<Installation/>} />
    <Route path='/docs' element={<Docs/>} />
    <Route path='/community' element={<Community/>} />
  </Routes>
  <Footer/>


  </div>

  );
}

export default App
