# How to Run
1. install chrome
2. install node.js v8.6.0
3. install yarn v1.1.0
4. ```yarn && yarn start:dev```

# Key Features
- Express with Webpack 2
- React with Redux / React Router
- Support Typescript

# How to deploy
```
heroku login
heroku container:login
heroku git:remote -a kambing86-redmart
heroku container:push web
```