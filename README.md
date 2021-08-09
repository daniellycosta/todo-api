# TodoApi

A project management software that allows users to create projects with a to-do list and registration when each task is finished.

## Content Table

- [How to use](#how-to-use)
  - [Enviroment variables](#envs)
  - [Installing dependencies and starting](#install)
- [Technologies](#technologies)
- [Author](#author)
- [License](#license)

## [How to use](#how-to-use)

### [Enviroment variables](#envs)

This project needs to connect to an data base. The database URI can be set on the `.env` file that should be created on root.

- **PORT**: Api port. Default value: `3001`
- **DATABASE_URI**: Mongo URI. Default value: `mongodb://localhost:27017/todo-mongodb`
- **AUTH_SECRET**: key used for encoding and decoding jwt token. Default value: `AUTH_SECRET_TEST`

You can also use the front end created for this project clicking [here](https://github.com/daniellycosta/todo-app).

### [Installing dependencies and starting](#install)

Once you've cloned the project, you should run the command down below to install the dependencies

```
yarn install
```

After installing the dependencies, run one of the commands below to start the application

```js
yarn dev //to start development server using nodemon
yarn start //to start production server
```

## [Technologies used](#technologies)

This app was made using:

- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Jwt-simple](https://www.npmjs.com/package/jwt-simple)
- [MongoDB](https://www.mongodb.com/)

## [Author](#author)

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/29708442?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Danielly Costa</b></sub>

Made with ❤️ by Danielly Costa

[![Linkedin Badge](https://img.shields.io/badge/-Danielly-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/danielly-costa/)](https://www.linkedin.com/in/danielly-costa/)
[![Gmail Badge](https://img.shields.io/badge/-daniellycmcosta@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:daniellycmcosta@gmail.com)](mailto:daniellycmcosta@gmail.com)

## [License](#license)

MIT License
