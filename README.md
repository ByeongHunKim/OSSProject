# OSSProject
오픈소스소프트웨어 최종프로젝트 

- make a client, server folder

# server
## `npm install express cors mysql2`
- after make a `index.js` file , ![](https://images.velog.io/images/hunsm4n/post/c6eef7a0-6aa4-4824-9fd7-ece5facb956a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.24.06.png)
   - try to `node index.js`
## `npm install nodemon`
- press ^c  before `npm install nodemon` and maintain position in server folder. 
- in "scripts" of ``package.json` , add a `"start": "nodemon index.js"`
- and try this
![](https://images.velog.io/images/hunsm4n/post/6a94a7e8-6490-43d3-a5d9-f70becc2135b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.30.19.png)
## MySQL workbench
- create schema TutorialDB
- in server folder, 
## `npm install sequelize sequelize-cli`
   - and, `sequelize init`
## problem during install sequelize and sequelize-cli
### problem
- `zsh: command not found: sequelize`
### solving process
![](https://images.velog.io/images/hunsm4n/post/1df7b47a-5fbe-4ca1-813e-39a5c137f517/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.57.03.png)

- and delete migration , seeders folder
- add a `Post.js` file in models folder

## Post.js 
![](https://images.velog.io/images/hunsm4n/post/8bb11cd9-c363-436a-b733-87caf03b0558/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.19.32.png)
- these are names of column
   - and Post is the name of Table
### in ./config/config.json 
![](https://images.velog.io/images/hunsm4n/post/4e15822e-e997-4aec-ade5-2f4664d85d2d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.23.28.png)
- change infos to yours 

## data INSERT SUCCESSFULLY
![](https://images.velog.io/images/hunsm4n/post/8aedaba4-6de3-4bc1-957e-438a32f786dc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.27.19.png)

[2]

# server
- make a `routes` folder in `server` folder
   - and add a `Post.js` file
## index.js
![](https://images.velog.io/images/hunsm4n/post/b346a28b-47c5-469a-8a9a-97caa5c13f8f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.18.40.png)
```js
//Routers
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);
```
## ./route/Posts
![](https://images.velog.io/images/hunsm4n/post/1479e432-6607-4e55-aae9-b1f650f0a89c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.18.52.png)
```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

// router.post();

module.exports = router;
```
### result
![](https://images.velog.io/images/hunsm4n/post/30701fdf-807b-4754-a040-437755de69ac/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.19.02.png)
### in Postman 
![](https://images.velog.io/images/hunsm4n/post/b21ee70f-98c4-4d6f-a1f5-0219e0c6f17d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.21.25.png)
### if want to send as a json?
- edit code in `./route/Posts`
```js
res.json('Hello World');
```
### result
![](https://images.velog.io/images/hunsm4n/post/19b41b27-2da7-47c3-aa5a-f5ba09061663/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.29.39.png)

## insert data into my DataBase(TutorialDB)
- in `./route/Posts`  add this code 
```js
const { Posts } = require('../models');

router.post('/', async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});
```
![](https://images.velog.io/images/hunsm4n/post/2fc70ed7-3b59-4fdd-9287-baf80cf4b357/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.43.18.png)

- edit code in `index.js` for parse
```js
app.use(express.json());
```
![](https://images.velog.io/images/hunsm4n/post/9ae963ee-91f7-406b-9338-02c789f40a4d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.53.51.png)


### result in Postman![](https://images.velog.io/images/hunsm4n/post/2c712122-5843-49bb-bed8-19949babea31/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.40.31.png)
### result in MySQL
![](https://images.velog.io/images/hunsm4n/post/eda3d1cc-87e3-4ae2-92c2-75896200d0c6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.41.05.png)

## make a listOfPosts
- in `./routes/Posts
```js
router.get('/', async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});
```
![](https://images.velog.io/images/hunsm4n/post/9566f8ca-530b-449b-8512-3128160cf74e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.05.35.png)
### result in Postman
![](https://images.velog.io/images/hunsm4n/post/a01d0d4d-eb5b-4c0a-b65f-090ddda08364/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.05.26.png)

# [3]

# Client
- `cd client`
- in client folder, `npx create-react-app .`
- when the download is finished , 
![](https://images.velog.io/images/hunsm4n/post/5fdf377e-0b6a-458a-980a-119f63723926/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.38.25.png)
- `npm start`

## in src folder
- delete `App.test.js, index.css, logo.svg, setupTests.js`![](https://images.velog.io/images/hunsm4n/post/4d59d327-610f-4352-bbc7-96c471bf9c77/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.41.50.png)

## Let's organize what's written App.css and App.js
- in `App.css`
- ![](https://images.velog.io/images/hunsm4n/post/cc0c58fa-e6c2-4994-ae12-87d539afd3c1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.44.43.png)

- delete `import './index.css;' in `index.js``and in `App.js`
![](https://images.velog.io/images/hunsm4n/post/f41d549f-753d-48ad-9c88-521b94869f64/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.47.44.png)

- then when u refresh the page, it will be empty page
![](https://images.velog.io/images/hunsm4n/post/01b9758f-3c55-4bed-8888-14e8e23c3376/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.48.10.png)

## install Axios
- in client folder, `npm install axios`

## App.js 
- `import axios from 'axios';`
- `import { useEffect } from 'react';`
- and add some codes in App function.
![](https://images.velog.io/images/hunsm4n/post/a62f53f8-b7c2-43e2-84e6-2383a07a1259/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.14.42.png)

## server folder , and install cors
- and change directory to server folder
-  first, we have to run `mysql.server start` in terminal and in server folder, `npm start` 
- and `npm install cors` , add code(`const cors = require('cors'); , and for useing middleware, app.use(cors());`) in `index.js (server folder)`
- when server is running, go to `http://localhost:3001/posts`
![](https://images.velog.io/images/hunsm4n/post/79f26c29-80b9-41dd-9020-f7c1b03d1d2c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.07.15.png)

- and we should inspect `console.log(response)` what we wrote in `App.js` from Client folder.
![](https://images.velog.io/images/hunsm4n/post/bd13ca5c-74c5-4683-909e-e1b12de9bd78/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.16.38.png)
- From this picture, we can see that the api request was successful.
- if we want to see datas from DB, add `.data` in `console.log(response.data)`
- then you can see datas from TutorialDB
![](https://images.velog.io/images/hunsm4n/post/092d72ad-ec1d-4500-9d19-832699a4c1c6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.19.46.png)

## for display our datas -> use a useState
- in `App.js in Client` , add `useState` besides `useEffect` and make a State
![](https://images.velog.io/images/hunsm4n/post/1f65fc24-5fbc-4215-9adc-eaf65c2c5b7a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.30.05.png)
-in page, 
![](https://images.velog.io/images/hunsm4n/post/24d5b95a-b269-461f-88eb-5e5495c69d6d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.30.39.png)
## edit in App.css (Client)

```js
.App {
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  padding-top: 40px;
  flex-direction: column;
}

body {
  margin: 0;
  padding: 0;
}

.post {
  width: 400px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border: 1px solid lightgray;
  font-family: Arial, Helvetica, sans-serif;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.post:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
}

.post .title {
  flex: 20%;
  border-bottom: 1px solid lightgray;
  background-color: dodgerblue;
  display: grid;
  place-content: center;
  color: white;
}

.post .body {
  flex: 60%;
  display: grid;
  place-content: center;
}

.post .footer {
  flex: 20%;
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: dodgerblue;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
```

- in page
![](https://images.velog.io/images/hunsm4n/post/5c157549-1c39-4e9d-93d0-56d875597691/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.48.26.png)
