# Postify

**Postify** is a web application that provides a platform for users to create and upload posts, particularly useful for social networking, community-building, and content sharing.

## Key Features

### 1. **User Authentication**
- **JWT (JSON Web Tokens)** is used for secure user authentication, ensuring that users can log in and log out securely.
- **bcrypt** is used for securely hashing passwords before storing them in the database.

### 2. **Profile Picture Upload**
- Users can upload a profile picture to personalize their accounts. **Multer** is used for handling image file uploads and storing them on the server.

### 3. **Post Creation**
- Users can create posts, which can include text, images, or other media. This allows users to share content, blog, and interact with others.

### 4. **Form Handling**
- The form allows users to select an image and submit it to the server using **multipart/form-data**, necessary for file uploads with **Multer**.

### 5. **Backend Setup**
- Built using **Node.js** and **Express**, the backend handles API requests, user authentication, and image uploads.
- **MongoDB** is used as the database for storing user data and posts.
- **cookie-parser** is used to handle cookies for maintaining user sessions.

### 6. **Tailwind CSS**
- The platform utilizes **Tailwind CSS** for styling, providing a modern, responsive, and user-friendly design across all devices.

### 7. **Minimalist and Clean UI**
- Postify offers a clean and minimalist user interface that focuses on essential features. Modern effects like hover interactions and sleek typography are integrated for a smooth user experience.

## Screenshot
<img width="400" alt="Screenshot 2025-02-04 at 7 21 00 PM" src="https://github.com/user-attachments/assets/2a77913f-fe8e-4ca7-90d2-d7d5237870f6" />


<img width="400" alt="Screenshot 2025-02-04 at 7 21 21 PM" src="https://github.com/user-attachments/assets/4499f6c2-d552-4254-b853-345a8c6e8074" />


<img width="400" alt="Screenshot 2025-02-04 at 7 21 41 PM" src="https://github.com/user-attachments/assets/5080de12-f4ca-4e34-a4f2-d1e10ce2236b" />

<img width="400" alt="Screenshot 2025-02-04 at 7 21 45 PM" src="https://github.com/user-attachments/assets/16093288-1f77-453d-8588-bc45f1535774" />


## Possible Use Cases

- **Social Networking**: Share content, interact with others, and express yourself.
- **Blogging Platform**: Post articles, share thoughts, and engage with an audience.
- **Community Sharing**: A space for users to interact, share ideas, and connect.

