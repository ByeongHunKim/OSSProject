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

#[4]

# Client 
- cd Client folder
   - `npm install react-router-dom`
   - and add `pages` folder in `src` folder
## in Pages folder
- make `Home.js` 
### add a extention 
![](https://images.velog.io/images/hunsm4n/post/d7a30754-f74f-4afe-b93b-b00c874c78f7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.49.35.png)

## Home.js
- after install that extension , 
   - try to `rfce` in `Home.js` 
   ![](https://images.velog.io/images/hunsm4n/post/01f5c1c1-90f3-4524-9f81-55fd91b2896a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.51.24.png)
   - then we can make a code easier than before.
   ![](https://images.velog.io/images/hunsm4n/post/1a395ca6-b501-41ce-98e0-85f6d7cd3993/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.51.44.png)


- copy every codes from `App.js` 
![](https://images.velog.io/images/hunsm4n/post/3ce5b983-5c81-4453-9f37-75e626d27b0b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.56.44.png)
   
- and make it empty
![](https://images.velog.io/images/hunsm4n/post/d263a0fc-13b8-4744-a120-f96b968541e1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.56.37.png)

# App.js (Client)
- `import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';`
-  `import Home from './pages/Home';`
- and try to check Client page after `npm start` in server folder
![](https://images.velog.io/images/hunsm4n/post/ea4ac658-51b8-498d-bd04-ba5960862e39/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.13.37.png)

# add a CreatePost.js in pages folder
- `rfce`
   - make a code between div tag
   ![](https://images.velog.io/images/hunsm4n/post/8487c331-aaed-48a5-a4f8-ac22af8dc051/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.20.22.png)
* and add some codes in `App.js` 
   - `import CreatePost from './pages/CreatePost';`
   - `<Route path="/createpost" exact component={CreatePost} />`
   ![](https://images.velog.io/images/hunsm4n/post/eb35b02f-106d-40a3-a841-fd68a851db61/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.21.28.png)
## in /createpost
   
![](https://images.velog.io/images/hunsm4n/post/05540fb9-f2e1-40b6-97ae-b5e0730d5300/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.22.23.png)

## in / 
![](https://images.velog.io/images/hunsm4n/post/c85a7fbf-d4d9-4da1-9baf-e98f13567cbb/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.23.22.png)

### reason why link to CreatePost is existing every route we go to? 
- because of `<Link to="/createpost">Create A Post</Link>` code.

# use formik for make a form
- in client folder, `npm install formik`

## in CreatePost.js
- `import { Formik, Form, Field, ErrorMessage } from 'formik';`
- and add some codes 
![](https://images.velog.io/images/hunsm4n/post/b376b8be-883a-495d-bba9-c222ac2e5431/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.29.54.png)

## in /createpost
![](https://images.velog.io/images/hunsm4n/post/3c0e928b-dfb4-4679-8173-e52b4f088c76/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.13.15.png)

## edit on App.css (Client)
- ![](https://images.velog.io/images/hunsm4n/post/2ca81d84-8454-48ad-b400-ae08f5f7a05c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.25.49.png)

- code  
```js
/* CREATE POST PAGE CSS */

.createPostPage {
  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: auto;
  padding: 20px;
  border: 5px solid dodgerblue;
  border-radius: 5px;
}

.formContainer #inputCreatePost {
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid grey;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 20px;
}

.formContainer button {
  margin-top: 15px;
  height: 40px;
  border: none;
  background-color: lightskyblue;
  border-radius: 5px;
  color: white;
}

.formContainer button:hover {
  cursor: pointer;
  background-color: dodgerblue;
}

span {
  color: red;
}
```

## install yup in Client folder
- `npm install yup`

### edit CreatePost.js

![](https://images.velog.io/images/hunsm4n/post/3c7df1f7-2a0b-4b0e-979e-2949fd3eb658/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.42.16.png)
![](https://images.velog.io/images/hunsm4n/post/8d1a68a9-e008-4df2-bcbc-014f13b991d5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.42.21.png)
### in /createpost
![](https://images.velog.io/images/hunsm4n/post/8b207945-ea09-466c-a6ac-f769d756f3a8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.43.16.png)

- you can check the Object in console

### validation check
![](https://images.velog.io/images/hunsm4n/post/1c570e29-997c-4231-89b9-0227293113ae/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.45.02.png)
![](https://images.velog.io/images/hunsm4n/post/e028c9d5-22e4-4be7-b3fe-ad7625bd46c7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.45.07.png)
![](https://images.velog.io/images/hunsm4n/post/68da3e96-7bf0-4bca-a37a-c566e484c730/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.45.16.png)
![](https://images.velog.io/images/hunsm4n/post/769a86e7-8fea-482a-ac99-9ac92cc7a9e3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.47.22.png)

## post request in CreatePost.js

- `import axios from 'axios'`
- add this code into `onSubmit function` 
```js
axios.post('http://localhost:3001/posts', data).then(response => {
      console.log('it worked');
    });
```
### and check in the page
![](https://images.velog.io/images/hunsm4n/post/90f14304-1c4e-4f57-b5d1-2b1d9ce4577f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.56.26.png)

- plus , what we wrote is added on `HomePage`
![](https://images.velog.io/images/hunsm4n/post/9b0449a3-0e48-44cf-a429-44be7f5bd1ae/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.57.20.png)

- how about DB?
   - it worked successfully
   ![](https://images.velog.io/images/hunsm4n/post/22b882c5-6fd8-4ac7-a56c-fa33b3673cc6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.58.28.png)

### If I didnt input username? 
- it cant be submitted
![](https://images.velog.io/images/hunsm4n/post/aefc6bcb-f3dd-4a13-8068-5b5ca79aeb7d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.00.51.png)
- how many times i clicked button , it didnt work. 

# result of CreatePost.js
![](https://images.velog.io/images/hunsm4n/post/5bfe2017-cd26-435c-a1be-e76a009ceb13/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.03.01.png)
![](https://images.velog.io/images/hunsm4n/post/e4fdcb34-ce27-4f45-9ee1-420c9762bfa0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.03.10.png)

# [5]

# add bar in App.js(Client)

```js
<div className="navbar">
          <Link to="/createpost">새 글 작성</Link>
          <Link to="/">홈</Link>
        </div>
```
# add codes for .navbar in App.css(Client)
```js
/* NAVBAR */

.navbar {
  width: 100%;
  height: 70px;
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
  margin-left: 20px;
  text-decoration: none;
  color: white;
}

```

# add Another Route for post when I clicked just one of Posts

- add `Post.js` in pages folder (Client)
- rfce
![](https://images.velog.io/images/hunsm4n/post/0ce537e6-4c4f-44df-bf7f-517b70ea5d56/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.12.51.png)

## in App.js (Client)
- add some codes
```js
import Post from './pages/Post';

<div className="navbar">
          <Link to="/">홈</Link>
          <Link to="/createpost">새 글 작성</Link>
        </div>

<Route path="/post/:id" exact component={Post} />
```
![](https://images.velog.io/images/hunsm4n/post/45e63715-3dc4-4957-94c4-3811594f0fd4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.19.40.png)
## in page
![](https://images.velog.io/images/hunsm4n/post/907038ca-7463-45a4-98b8-7af375c3aa63/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.15.56.png)

# Home.js (Client)
## useHistory hook
## and add onClick event in `.post`
* `import { useHistory } from 'react-router-dom';`
- `let history = useHistory()`
![](https://images.velog.io/images/hunsm4n/post/771ded29-38c8-40e0-9be0-3f0ac0224bf2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.16.31.png)


### when I clicked first post (which id is 1)
![](https://images.velog.io/images/hunsm4n/post/50556fb6-a488-424d-900c-24c4906ad875/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.32.06.png)
![](https://images.velog.io/images/hunsm4n/post/ea10a43b-d5cc-48f0-bd25-f9022911b16a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.32.13.png)
- it is rendering 1 because i put `{id}` in `Post.js`
![](https://images.velog.io/images/hunsm4n/post/a6c77a2f-d751-4054-a828-23737d53d337/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.33.49.png)

# Post.js [1](Client)

## useParams hook
- `import { useParams } from 'react-router-dom';`
# Post.js [2](Client)fetch the data based on id
## for to do that, use useEffect & axios
- `import React, { useEffect } from "react";`
- `import axios from 'axios';`

- and use useEffect
![](https://images.velog.io/images/hunsm4n/post/0998abf0-c671-4b99-9bbe-00ea1db80f5a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.44.45.png)

## in Posts.js in server folder (./route/Post.js)
- add some codes
```js
router.get('/byId/:id', async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});
```

## check api request in Postman
![](https://images.velog.io/images/hunsm4n/post/91d8de88-5d92-4068-aa15-f1bc187efa20/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.13.01.png)

## response in individual id page
- code in Post.js `(./pages/Post)(Client)` 
![](https://images.velog.io/images/hunsm4n/post/a00af0d9-4d00-43d1-9d1a-c2199f832914/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.33.48.png)
- console
![](https://images.velog.io/images/hunsm4n/post/a7089ace-12c0-477e-a70a-62e49036ca89/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.35.29.png)


# Creating a state which will allow us to hold that data 
- add `useState` 
- `const [postObject, setPostObject] = useState({});`
   - make a state
- `setPostObject(response.data)`
   - and grab a data in response
* `return <div>{postObject.postText}</div>`
   - we can see id:1's postText
   ![](https://images.velog.io/images/hunsm4n/post/a04fc8d1-8229-41c8-9c59-da6a6957222e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.43.01.png)
   - postText rendering from page is real data from DB
   ![](https://images.velog.io/images/hunsm4n/post/48f88a99-7133-4bed-907a-190ce8a57acc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.43.42.png)
   
 ## code in Post.js 
 - left side will be individual post
 - right side will be comment place
 ![](https://images.velog.io/images/hunsm4n/post/b9f79163-975d-4b1f-891a-dedc421f654e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.56.08.png)
 ### in page
 - id 1
 ![](https://images.velog.io/images/hunsm4n/post/ab6f805f-40dd-49ce-879f-d3c685faf137/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.56.38.png)
 - id 3
 ![](https://images.velog.io/images/hunsm4n/post/2a3b0612-b6ff-496b-8be2-0a8295c0b715/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.56.50.png)
 
 # make a visual confirmation when we click Create Post button (작성완료 버튼)
 - for now, when I clicked Create Post , I was still in the page
 - so let's make that work how do we redirect based on if we clicked on the create post button 
 
 ## in CreatePost.js (Client)
 - `import { useHistory } from 'react-router-dom';`
    - add useHistory
 - `let history = useHistory();`
    - put it at the top
 - `history.push('/');`
    - put it instead of console.log('IT WORKED') in `onSubmit()`
 ### check in Page
 - when I create a new post, it should redirect us to the 홈 which is just the slash. 
 ![](https://images.velog.io/images/hunsm4n/post/a8e17e86-e276-4f7c-8cbe-e234584a4ad2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.09.10.png)
 - when i clicked button?
 ![](https://images.velog.io/images/hunsm4n/post/3a8d498b-8db0-4e76-98cb-833042a84dc2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.09.37.png)
 - redirect us to the 홈 page 

# [6]

# In Server folder
## I'm going to create another Table which is going to store that comment section
- make `Comments.js` file `in models folder` (Commnets Table in TutorialDB)
- copy `Posts.js's code` and paste all of this in `Commnets.js`
> The only thing that right now I should add to comments will be just the actual comment body.
![](https://images.velog.io/images/hunsm4n/post/9c7ad017-f200-4661-afd1-cf9df8620061/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.54.18.png)

- and check in DB
![](https://images.velog.io/images/hunsm4n/post/f5272ff1-3595-4505-863b-d2c6dcc86a84/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.57.41.png)
- there are Comments, and Posts table. and Comments table has only commentbody. Like I coded in VSCode

# Posts.js (Server)
- make code for associate with Comments tabel
```js
Posts.associate = models => {
    Posts.hasMany(models.Comments, {
      onDelete: 'cascade',
    });
  };
```
- drop the Comments tabel and then refresh VsCode,WorkBench
![](https://images.velog.io/images/hunsm4n/post/7172547c-7d20-4163-ab13-76dd3dd4302b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.04.56.png)
   - associate a comment to a post i am just going to add the id for the post which is `id` from Post Table
   
## creating routes or endpoints are deal with comments
- make a `Comments.js` in route folder (server)
- import `Posts.js ` 's statements at the top
```js
const express = require('express');
const router = express.Router();

const { Comments } = require('../models'); 
// this is used to deal with the DB related to comments

module.exports = router;
// in order to make this router work, 
we need to export this at the bottom
because we need to export the router
containing all the endpoints that I'm going to
create related to this route
```

## index.js (server)
- inside of this folder so that in our index.js which is the file that like is the entry point of our server , I have to grab this route over here at the top 

![](https://images.velog.io/images/hunsm4n/post/146e63df-b280-48ac-bb9f-91970a3e9894/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.18.28.png)
- and then just apply new Router (Comments)
```js
const commentsRouter = require('./routes/Comments');
app.use('/comments', commentsRouter);
```
![](https://images.velog.io/images/hunsm4n/post/9b97267e-9a8e-471c-aa9b-474d4a31e261/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.23.12.png)
- now I have my comments route working in my application
## create endpoints (Comments.js) server
- `./routes/Comments`
- I want to grab only the comments related to specific id. But not the id for the comments . **the id for the post**
- put some codes 
```js
router.get('/:postId', async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { PostId: postId } });
  res.json(comments);
});
```
### test in Postman
![](https://images.velog.io/images/hunsm4n/post/e6df0705-4348-46c3-8fb1-1297c54ae828/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.34.26.png)

- now, it sends an empty array but when I add more comments, it should return every single comments that exist for that specific post 

### for make comments as post request
- send a body containing the text that is going to represent the comment , and also the postId that comment is related to.
- grab object that im going to send through the body by saying (`const comment = req.body`), 
- accessing the comments model, and im going to create a new comment. `await Comments.create(comment);`
- and at the end i can just return `res.json(comment)`
- this is visual representation that this is working
![](https://images.velog.io/images/hunsm4n/post/c0af5f56-8cbd-4a9f-949b-d3c1d4ee3d8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.44.19.png)

### post request in Postman
![](https://images.velog.io/images/hunsm4n/post/cda20744-a474-4fdc-ac83-e5cf65ac95ad/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.53.50.png)
- it returned my body which is exactly what i wrote
* but, to get any confirmation go to comment table and check whether there is new comment or not

- there is new comment what i send in Postman
![](https://images.velog.io/images/hunsm4n/post/aad57e7e-5e26-47a3-bcc1-7834431acecc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.53.43.png)

### get request after post request
![](https://images.velog.io/images/hunsm4n/post/aa3e4521-822c-469b-92af-d3b35be99189/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.56.04.png)

# [7]

# build interface for Comment
## Post.js (server)
- edit code in `.rightSide`
```js
<div className="rightSide">
        <div className="addCommentContainer">
          <input type="text" placeholder="댓글" autoComplete="off"/>
          <button>입력</button>
        </div>
        <div className="listOfComments"></div>
```
### why dont use formik in Comment
- formik was something very important we had validation all the kind of stuff why aren't we using it for this well the reason is there's no necessity for it
   - this is just an input which takes it can take literally anything.
   - in case I want to like filter words out and now allow users to comment certain things, then do it. 

### display a list of all the comments
- how do we do that
* similar to what I did previously, i made an api request that our api that is executed immediately when my page renders which is something i did by using useEffect for to get the data for specific post.
### useEffect
- similar to that i tried before, make another api request which is going to be to the same. but the route is different
```js
axios.get(`http://localhost:3001/comments/${id}`).then(response => {
      setComments(response.data);
  		// data will be a list of comments
    });
```
- this should return the list of all the comments related to specific post.
### useState
- so now that I got data from the response and I need to deal somehow 
- Create a state at the top
- `const [newComment, setNewComment] = useState('');`


### .listOfcomment
- when this is done, I should able to access this list(comments) and map through each element to display the comment

```js
 <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
              	// if u want to use the key as well bc, react
				can gives us some error if we dont use it 
                or some warnings you can just do something
                like this.
                {comment.commentBody}
				// commentBody is from Comments Table
              </div>
            );
          })}
        </div>
```
![](https://images.velog.io/images/hunsm4n/post/4e182f40-90ac-49d6-997f-7aa4ea3bfc98/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.48.45.png)

#### Error
![](https://images.velog.io/images/hunsm4n/post/0b2acaec-7c2b-4feb-87e5-857a9a8bf955/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.14.26.png)
![](https://images.velog.io/images/hunsm4n/post/1dd1431f-5809-4d42-b93f-d06b152551ab/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.13.59.png)
#### Error solving process
- the reason why i got error is 
 that i need to account is the fact that in our useEffect , i didnt pass in an array which was a mistake. we need to pass this dependency array so that it wont be calling the same api requests every second. bc what happens is useEffect will run every time there's a differnce like any changes in my state of application, or it will change depending on each state that i put over here.
* if i dont put any states it will basically just run once which is what i want i just want it to run immediately when the page renders.
- if dont do that, it's probably going to break my website. bc it's going to make a lot of api requests. 

![](https://images.velog.io/images/hunsm4n/post/6f4cdbc9-7311-43f0-ae41-87817ec98ccf/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.35.24.png)
- add empty arr for many request.

#### after css (.rightSide)
![](https://images.velog.io/images/hunsm4n/post/c1a9382f-1b17-46b0-980e-3357803d7cdf/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.52.12.png)

# router 
- recall in my `comments route in server` , it has endpoint called which is a post request which basically just grabs a comment which takes in a postId and the comment body and it just creates and adds it to the TutorialDB
- need to make a request to `router.post("/")` 

#### to do that (in ./src/pages/Post.js) client
- create a function that is going to be whenever click on the 입력 button 
```js
const addComment = () => {
    axios
      .post('http://localhost:3001/posts', { commentBody: newComment, PostId: id })
  //id is already the value for postId that i got from the params
  };
```
- containing two pieces of infomation that I need
- it's an object that contains a commentBody, and PostId 
- basically for the commentBody what im going to put is the value that I get from the input from `.rightSide .addCommentContainer` 
- but need to make state first
   - `const [newComment, setNewComment] = useState('');`
* and add onChange event that basically will be called every single time there's any changes to my input which means whenever i am writing on my input, and im just going to pass an anonymous function in side of here, and whenever there's changes im going to grab the event from the input and just `setNewComment()` (setNewComment State) to be equal to `event.target.value`
- it's a way to out of how i can grab values directly from inputs and set them to a state and just use them later
- `.then(response => {
        console.log("comment added!")
      });`
      - have to finish request by holding the promise, so im gonna grab the response and `console.log("comment added!")` 
 ![](https://images.velog.io/images/hunsm4n/post/2977f6a9-1984-4bfa-bbfc-5424b75a5f05/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.30.44.png)
 - when i click on the button, i want to call `addComment` function.
    - `<button onClick={addComment}>입력</button>`
 - it should work. 
 
### when click the 입력 button, automatically appear down without freshing page
- optimistic update which basically means that im going to assume the api request worked in the since that the api request is done, im assumming that it actually was the data was sent to the DB and it it is in the DB.
- updating the list of `comments state` 
   - inside of `addComment` , intead of console.log , 
   `setComments([...comments, commentToAdd])`
      - `...comments` previous list of comments
      - `commentToAdd` new Comment 
   - this format is called array destructuring. just grabbing the previous elements in the array. and jusy adding a new element 
   - however each comment is an object containing like PostId, and a commentBody. 
   - add `const commentToAdd = { commentBody: newComment };`
### clear input area when we click the button
- even after we add the comment it's still there.
![](https://images.velog.io/images/hunsm4n/post/567903b4-8e54-41d4-92f2-7dd6faac2d90/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-17%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.10.46.png)
#### in input (Post.js) 
- add `value={newComment}`
   - give a value to it and the value to it will be newComment.
   - and value is just whatever appears in my input
   - for example, `value="hi"`![](https://images.velog.io/images/hunsm4n/post/dbc1f301-7c47-42c6-a2d5-a931f9cfad77/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-17%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.14.24.png)
   - the input should start with hi
   - if i set this `newComment` , it doesnt matter it wont make any changes  
   - im just updating whatever i m writting on the input and just putting that value over here. so why would that be important
   - `setNewComment('');`
      - after i add the comment to my DB after i add it to my list, i could just set `setNewComment('');` 
      - removing the value that currently exists
   ![](https://images.velog.io/images/hunsm4n/post/43217c75-a15e-4a7e-b2a0-1f27241ff570/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-17%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.29.12.png)
   - after i clicked button,
   ![](https://images.velog.io/images/hunsm4n/post/3ada2730-854e-408e-8a24-018ef86685ae/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-17%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.29.18.png)
   - so that it becomes empty
   - what happens it not only the state will update but also the value inside of the input will update which means it will clear whatever is here.

# [8]

# ./models/user.js

## server should be stopped before edit code. After finish add some codes, run server and check UsersDB is created or not
- ![](https://images.velog.io/images/hunsm4n/post/887f22ca-f2e1-4278-ad36-d43d6f17078f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.27.32.png)

- check in DB
![](https://images.velog.io/images/hunsm4n/post/6f1f67ff-42fc-4dbb-8c5c-a7528ed27697/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.26.52.png)

# ./routes/Users.js
- copy codes from the other one and paste here
- make post request
```js

```
- add Router in `index.js` (server)
```js
const usersRouter = require('./routes/Users');
app.use('/auth', usersRouter);
```

# npm install bcrypt in server folder
- and import in `./routes/User.js`
   - `const bcrypt = require('bcrypt');`
![](https://images.velog.io/images/hunsm4n/post/d80f7c6f-398e-4970-ab17-b6e5d97389d7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.39.34.png)
# check in Postman 
- post request
   - `/auth`
- post json
```js
{
	"username": "husnman",
     	"password": "hunsman1234"
}
```
![](https://images.velog.io/images/hunsm4n/post/63dc5b1c-85a2-4254-a209-9a7e96085a30/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.42.43.png)
-> password will be hashed
- ![](https://images.velog.io/images/hunsm4n/post/1df5842c-188b-434d-9de8-d11516c77d03/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.44.38.png)
# make post request in /login
-  i had error bc i wrote `fineOne` so I edited to `findOne`
![](https://images.velog.io/images/hunsm4n/post/0f4a9de6-f879-4445-8066-6df42e8cd8dc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.01.23.png)
- test in Postman
   - if ID is wrong , make err, or if pw is wrong , make err
   ![](https://images.velog.io/images/hunsm4n/post/f2ee8528-21e9-44a1-a3d7-7751208a330d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.09.11.png)
   ![](https://images.velog.io/images/hunsm4n/post/057fc41a-41a8-4a1e-844e-6635d16453af/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.09.28.png)

## edit code / 9.20 Mon
![](https://images.velog.io/images/hunsm4n/post/48f6eecf-00f6-4ebf-93e3-597a85511862/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.05.30.png)
  
# App.js (Client)
- add `Link to="login" , "registration"


# ./pages/login.js + registration.js
# add Route path ="/login", /registration
```js
<Route path="/login" exact component={Login} />
<Route path="/registration" exact component={Registration} />
```

# Login.js
```js
<input type="text", "password">Login, Registration</input>
<button onClick={login}></button>
```
- import `useState`
![](https://images.velog.io/images/hunsm4n/post/69765705-0660-423e-92fc-1e370f13c428/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.12.27.png)
- `Registration.js`
## onSubmit function 
```js
axios.post
```
- check DB when click Submit button
![](https://images.velog.io/images/hunsm4n/post/db10bd27-9b48-4b0c-a6fd-4cffc2283a12/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.12.57.png)
![](https://images.velog.io/images/hunsm4n/post/49ba89f8-aa08-40d6-95b4-8f6c248bd01a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.13.04.png)
# result in Login page
![](https://images.velog.io/images/hunsm4n/post/8da95d79-ae88-4509-a9c0-cbe83e1b4ce3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.05.33.png)

# [9]

# App.css (for login page)
- before 
![](https://images.velog.io/images/hunsm4n/post/a2689056-9cce-4035-8217-73e0fad74bca/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.58.59.png)
- after
![](https://images.velog.io/images/hunsm4n/post/550ee784-433c-4147-be3f-f1e596b9425f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.08.09.png)

# npm install jsonwebtoken in server folder
![](https://images.velog.io/images/hunsm4n/post/9e4da599-dcb7-4817-b3f1-818c0ca1a91c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.57.19.png)

# server/routes/User.js
- `import jsonwebtoken`
   - `const { sign } = require('jsonwebtoken');`
## post request. login , use accessToken
![](https://images.velog.io/images/hunsm4n/post/d8b5026d-b3fb-4608-83a1-dccb07500c9d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.19.25.png)


# inspect/network/response & application
- response
![](https://images.velog.io/images/hunsm4n/post/7a4f44d4-a182-4c89-8a67-6e3d55117d6d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.18.05.png)

- application
![](https://images.velog.io/images/hunsm4n/post/91425e3f-d2e8-4424-8701-b9ca3f970bb1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.20.52.png)
- we can check the token

- if I input none user info, 
![](https://images.velog.io/images/hunsm4n/post/bf14de12-5959-4e06-a4ed-6c86ed0a5da9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.27.58.png)
# Login.js (client)
- in login function
![](https://images.velog.io/images/hunsm4n/post/ea98798a-7cbd-4de2-8712-41af9a0d3fcd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.34.03.png)

# in server folder
## for user validation 
- check to see if the user has a correct jsonwentoken stored in their session storage.

## what is the middleware
- just a function that runs before a request and checks to see if u want to continue with the request or not.
- create middlewares folder
- and create `AuthMiddleware.js` file

# AuthMiddleware.js
- all i wanna to do is be able to grab the token that is sent through the front-end then validate by using jwt function called verify and im going to verify to see if it's valid if it is valid, then i want to continue with the request and send the comment add the comment to `TutorialDB / comments` if not , im going to return sort of json response in the request with some sort of error 

- create `validateToken`
   - middleware is just a function that has req, res, and next
   - req and res is basically the same arguments that ive been using so far. they are used to get stuff from the request and send stuff back using the response
   - next is a function that u call when u want the request to move forward. so this function will run before a request. so for example, i have my comments route.  what im going to do is im going to pass this validate middleware into `./route/Comment/post("/)`  and whenever someone makes a request to this comments endpoint , they want to first go to this function make a bunch of checks including to see if the user is authenticated it's and if the user is then , i call this next function and this is basically means is i want to continue forward with my request. so it means it will just come here(`./route/Comment/post("/)`) and do whatever which is just like creating and adding the comment to the TutorialDB / comments. However if it isnt a valid token, then i should return directly from here(`validateToken` in AuthMiddleware.js) and some sort of error to let the user know in the front-end that thet are not authenticated
## in validateToken
- what i want to do is i want to grab the data (token) from my front-end. 
- to grab the token, 
- how im going to pass this token from the front-end to back-end.
   - im going to pass it through the headers
      - header is just an object that exist in my request
- to access variables that im going to pass in the headers all i have to say is 
`req.header()` and then inside of here we pass the name of the header object that im going to pass. im not currently passing this in the front-end but im gonna to do that later so let's assume that in the front it will pass some sort of key in the headers called `accessToken` and this should have a value of the actual access token in my session storage. 
- so what im going to do now is first of all , ask to see if there is acutally something being sent in the request.
- because if there isnt then im basically where i know the user's not authenticated . they might have a wrong token however i will check this later.
- right now the first thing i need to check is to see if the user is trying to make a comment , without even logging in first so to do that, let's just ask if not accessToken (`if(!accessToken)`), so if there's no accessToken if this doesn't return any accessToken i just want to return from response.json (`return res.json()`) and this json will be an object containing error and i will say like `"사용자가 로그인 되지 않았습니다."` and if the user has an `accessToken` i now need to check to see if the `accessToken` is actually valid. if they didnt just make up the string and it's pretending to that it acutually is the correct one. so to do that im going to be using a function called verify which is from `jsonwebtoken`
   - `const { verify } = require("jsonwebtoken")`  
* validateToken function will basically verify to see if i am correct and it will also parse back the token in the sense that i can access the values that i stored in it the payload that i starting it if i want to. but im not going to be accessing them right now.
- all i want to worry is to try to see if it's valid.
   - so im gonna run our `try / catch` which  is something i've to do because im going to verifing it so i can say `try / catch` and `catch` will grab any errors that occurs and in the `try` what im going to try is grab a valid token 

![](https://images.velog.io/images/hunsm4n/post/26021794-d2e2-46ac-812e-8b9e4f6b6e8a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.41.08.png)


# Comment.js
- if i want to use `AuthMiddleware` in the comments endpoint , just have to import this. 
   - `const { validateToken } = require('../middlewares/AuthMiddleware');`
* and all i have to do to pass a middleware is my endpoint is just pass the name of the function right after the request and what this means is it will receive the request then go through this middleware do all the checks that if it's valid token
![](https://images.velog.io/images/hunsm4n/post/6edc0a3d-673b-4472-bb3a-1adc15e3fc10/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.52.23.png)

# Post.js (client)
- all i wanna do is i want to pass inside of this `axios.post` im going to pass my headers.
- pass another object which is going to be it's considerd the config object in any request and inside of it i can pass a headers object. (headers will only contain one piece of info called `accessToken`)

![](https://images.velog.io/images/hunsm4n/post/ce67b5cb-c06d-4c8d-a55f-603bb85b882c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.58.23.png)
- i had a problem that i could make comment even if i didnt logged in. but after refresh the page, it's gone. 
so i add some codes in `then()` to if there's err, alert it.
![](https://images.velog.io/images/hunsm4n/post/833ca0db-08aa-4e8b-af23-753896f4c6cd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.04.04.png)
- in page 
![](https://images.velog.io/images/hunsm4n/post/32ec9f80-3391-4838-87f9-ff55bfc70966/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.04.30.png)
- after logged in 
![](https://images.velog.io/images/hunsm4n/post/b860c1bb-749d-4359-95a2-7f13beed02f8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.05.44.png)
- comments in `TutoralDB`
![](https://images.velog.io/images/hunsm4n/post/27547786-d473-45aa-a16a-117eaa3238cc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.06.33.png)

# to redirect homepage when the login is successful

## Login.js
- import useHistory
   - `import { useHistory } from 'react-router-dom';`
   - `let history = useHistory();`
- add this `history.push('/');` in `login function`

# inspect -> application -> delete token and try again whether redirect to homepage or not

# [10]

# delete every rows in comment table from TutorialDB  
![](https://images.velog.io/images/hunsm4n/post/d9518167-ac51-41ba-90b7-7a0858e44e93/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-21%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.17.17.png)

## and add a username (.model/Comments)
![](https://images.velog.io/images/hunsm4n/post/59d9c645-9d73-44e1-900b-4796fbfe5efa/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-21%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.19.50.png)
![](https://images.velog.io/images/hunsm4n/post/122517fc-6dc7-43ca-8f0e-5ba7e76f04bd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-21%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.20.00.png)
### Caution
- i should stopped server first. `^c`
- 1. delete all comments in Comments table
- 2. drop the Comment table
- 3. and edit code in `Comments.js`
   - add `username` field
- 4. restart server `npm start`
- 5. check DB tables


# AuthMiddleware.js
- for access the username , 
   - in `try` , 
      - `const username = validToken.username`
         - this is the payload the data that we stored in out token
* why is that important because since this middleware is executed in every request, i can create request variables instead of this that are accessible in every single request which i pass middleware.
- so if i want to create a user some sort of variable that stores the user infomation, i can say `req.user = "hunsman"`
   - i can technically access this in every single endpoint or every single request which i pass this middleware.`(validToken)`
   ![](https://images.velog.io/images/hunsm4n/post/5ce235b7-ed9c-43a6-a074-22e92b71192c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.29.36.png)
   
## Comments.js
- when i want to access the username whenever we make any requests, all i have to do is i have to come `server/routes/Comments.js` and in `post request` add codes
`const username = req.user.username`. Because req.user now it's an object containing the username and the id.(`validtoken` is exactly `req.user`)
* i used to just send comment but since i adding a new field to this object that i want to add to my TutorialDB, i dont want to pass it as just a single object anymore.
- so adding the field username to the comment object and set it equal to username `comment.username = username`
* comment object now has a username field which is equal to the useranme that i got from the authenticated user.
- and now when i pass this it should create the comment in my TutorialDB with the username for the user who is logged in.

### when i create comment

![](https://images.velog.io/images/hunsm4n/post/e605784d-eb5b-4022-86b1-39054b91209a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.37.21.png)

first comment is former comment , second one is comment after edit codes.

![](https://images.velog.io/images/hunsm4n/post/2cc1ff10-2074-4998-a665-b5db89150a48/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.37.07.png)

so first one doesnt have username. Besides, second one has username.

# for display username at Comment section
## Post.js (Client)
- whenever i am displaying comments which is `line 66 in Post.js` , list mapping over here. map through every single element and i get the comment the specific comment as an object.
* so all i have to do if i want to add the username, edit code here.

![](https://images.velog.io/images/hunsm4n/post/0093a373-acc6-40cd-9608-55071ff8480c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.55.17.png)
- when i edit like this, 

![](https://images.velog.io/images/hunsm4n/post/4a640c2f-8170-46fb-99ec-26c8cad4dc1b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.55.50.png)

- there is username

## Problem 1

- when i added third comment, it didnt display a username![](https://images.velog.io/images/hunsm4n/post/ba0dccbf-fcfb-46e8-88c2-38f19f2bc3f0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.57.24.png)

- but when i refreshed the page, it worked. 
![](https://images.velog.io/images/hunsm4n/post/389b17aa-0b53-49db-a94a-f84a12e4388f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.58.45.png)

- why is happening? because of optimistic rendering. so if i recall this isnt being filled by the database. this is something that i add when i write my comment.but if i refresh the page, the username will be here. 

- how do i fix this?
* the reason why that's happening is here(`Post.js line 33`) when i actually have the comment done, here just adding the comment to my page. but i dont have the username with me. 
- technically i just have to grab the username from response.
because in`comments route in server folder` it just returning the full comment that i created. 
![](https://images.velog.io/images/hunsm4n/post/1f515931-cae6-4c15-8cdf-4a0dc7d67cd0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.06.52.png)

`res.json(comment)` -> this includes the comment body and it also includes the username that i added. 
* so if i want to have access to that username, i can grab it from the response. 
- just add a username field to the comment to add object

### Post.js (Client)
- `username: response.data.username` add this
![](https://images.velog.io/images/hunsm4n/post/62a082f5-5600-43ad-97ba-d1275ee37dd3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.10.55.png)
### result
- and now if i refresh the page and just try to add new comment, it has username automatically.
![](https://images.velog.io/images/hunsm4n/post/363ca89c-4177-4407-82e1-1203d572cb08/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.11.51.png)



