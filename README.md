# BlogsCafe - "Your Personal Blogging Hub"

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Introduction

**Blogscafe** is a full-stack web application that provides users with a platform to create, edit, and share blogs. Whether you're a seasoned blogger or just getting started, Blogscafe is designed to make your blogging experience seamless and enjoyable. The platform allows users to explore blogs created by others, fostering a vibrant community of writers and readers.

## Features

- **User Authentication:** Secure login and registration with Appwrite.
- **Blog Creation & Management:** Create, edit, and delete your blogs effortlessly.
- **Community Interaction:** Browse and read blogs created by other users.
- **Responsive Design:** Fully responsive UI/UX built with Tailwind CSS.
- **Scalable Backend:** Appwrite as Backend-as-a-Service for authentication, database, and storage.
- **Deployment:** Deployed on Vercel for fast and reliable performance.

## Tech Stack

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="40" height="40" /> &nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40" height="40" /> &nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" width="40" height="40" /> &nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" width="40" height="40" /> &nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="40" height="40" /> &nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg" width="40" height="40" /> &nbsp;
<br/>
- **Frontend:** React, Tailwind CSS
- **Backend:** Appwrite (Backend-as-a-Service)
- **Deployment:** Vercel
- **Dependencies:** TinyMCE for editor, React-Hook-Form, HTML-React-Parser 

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mounishvatti/blogscafe.git
   cd blogscafe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Appwrite:**
   - Set up an Appwrite project.
   - Create collections for users and blogs.
   - Set up authentication and permissions.
   - Configure your `.env` file with Appwrite project details.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Deploy to Vercel:**
   - Ensure that your build output is optimized for Vercel deployment.
   - Connect the repository to Vercel and deploy.

## Usage

1. **Sign Up:** Create an account using the signup page.
2. **Login:** Access your account to start creating blogs.
3. **Create/Edit Blogs:** Use the editor to write and manage your blog posts.
4. **View Blogs:** Browse through the collection of blogs created by others.
5. **Responsive Experience:** Enjoy a seamless experience across devices.

## Folder Structure

```
blogscafe/
│
├── public/             # Static assets and public files
├── src/
│   ├── appwrite/       # Authentication and database configuration 
│   ├── components/     # Reusable components
│   ├── pages/          # Application pages (Home, Login, Signup, etc.)
│   ├── store/          # Redux store configuration
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   ├── index.js        # Entry point
│   └── ...
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
├── README.md           # Project documentation
└── ...
```

## Contributing

Contributions are welcome! If you'd like to contribute to Blogscafe, please fork the repository, create a new branch, and submit a pull request. Before contributing, ensure that your code adheres to the project's coding standards and is thoroughly tested.