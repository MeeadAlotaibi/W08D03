# Code Overview
The main purpose of this repository is to show an authentaction and authorization with Node.js API Server 

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone  https://github.com/SaharAlassaf/W08D03.git 
```
- Install dependencies
```
cd W08D03
npm install
```
- Start the local server
```
npm run dev
```

# Application Structure

- `index.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `routers/controllers` - This folder contains configuration for passport as well as a central location for configuration/environment variables. It has 3 files 1- role.js for craete roles and show roles. 2- user.js for signin and sign up. task.js show all tasks for Admin, show task by id, show deleted task for Admin, add, update and delete task.
- `routers/routes` - This folder contains the route definitions for our API. It has 3 files 1- role.js for post roles and get roles. 2- user.js for get users, delete user, post signin and post sign up. 3- task.js for get All task, get task by id, get deleted task, put update task by id, delete task by id, post to create task
- `routers/middlewares` - This folder contains the middleware used for our API. It has 2 files 1- authentication.js for authentication the token. 2- authorization.js for authorization the role.
- `db/index.js` - This folder contains the schema definitions for our Mongoose models.
- `db/models` - This folder contains the schema definitions for our Mongoose models. It has 2 files 1- role.js for role schema. 2- user.js for user schema.

# Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

| Package                         | Description                                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------- |
| express                         | Node.js web framework.                                                                  |
| dotenv                          | Loads environment variables from .env file.                                             |
| mongoose                        | MongoDB ODM.                                                                            |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                                         |
| cors                           |  for providing a Connect/Express middleware that can be used to enable CORS with various options.                                                                                                                    |
| jsonwebtoken                   | An implementation of [JSON Web Tokens](https://datatracker.ietf.org/doc/html/rfc7519).   |
| morgan                        | HTTP request logger middleware for node.js                                                |
| nodemon                        | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.                                                                                      |
=======
# To-Do-List
=======
Project "Login/Signup" as Backend with hashing password and token.
Creating Roles and Users.
Roles as first one as Admin and the second one as User.
Creating Todo Task with 4 CRUD opeartions.


### This Task Built With

## Dependencies

- Dotenv
  To hide our content keys

```bash
npm i dotenv
```

- Express
  To build our server

```bash
npm i express
```

- bcrypt
  To bcrypt the passwords

```bash
npm i bcrypt
```

- jsonwebtoken

 To genreate tokens

```bash
npm i jsonwebtoken
```
---
### ER digram 
![Untitled Workspace (3)](https://github.com/MeeadAlotaibi/W08D03/blob/main/Screen%20Shot%201443-05-04%20at%204.24.45%20PM.png
)


--- 
### UML 


![Untitled Workspace (3)](https://github.com/MeeadAlotaibi/W08D03/blob/main/Screen%20Shot%201443-05-05%20at%202.20.50%20AM.png
)
