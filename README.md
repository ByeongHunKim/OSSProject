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
   
