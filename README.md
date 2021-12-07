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
