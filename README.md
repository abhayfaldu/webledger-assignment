# Recipe App

Welcome to the Recipe App, a platform for discovering and sharing delicious recipes from around the world.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Acknowledgments](#acknowledgments)

## Project Overview

The Recipe App is designed to make your cooking experience enjoyable and hassle-free. Whether you're a seasoned chef or a kitchen novice, our app provides a diverse collection of recipes to suit your taste buds. From breakfast to dinner, from appetizers to desserts, explore a wide range of culinary delights.

## Features

- **Recipe Search:** Easily search for recipes.
- **User Accounts:** Create an account to save your favorite recipes.
- **Responsive Design:** Access the app seamlessly on various devices,

## Technologies Used

- **Backend:**

  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)

- **Frontend:**

  - [React](https://react.dev/)
  - [Tailwind](https://tailwindcss.com/)

## Getting Started

### Prerequisites

This tools should be installed in your app.

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/abhayfaldu/webledger-assignment.git recipe-app
   ```
2. Change directory to Sever `cd recipe-app/server`
3. Install dependencies `npm install`
4. Start Server `npm run server`
5. open a new terminal window and locate to the `recipe-app` folder
6. Change directory to Client `cd recipe-app/client`
7. Install dependencies `npm install`
8. Start react app `npm start`

Now the project should be running locally.

## API Endpoints

- `POST /api/user/register`: For registering the user.
- `POST /api/user/login`: For user login.
- `GET /api/user/saved-recipes`: For getting all the saved recipes of logged in user with authentication token.
- `POST /api/recipe/save`: This is for user to save recipe.

## Acknowledgments

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)
- [nodemon](https://www.npmjs.com/package/nodemon)

- [axios](https://www.npmjs.com/package/axios)
- [formik](https://www.npmjs.com/package/formik)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [yup](https://www.npmjs.com/package/yup)
