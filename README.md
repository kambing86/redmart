# How to Run
1. install chrome
2. install node.js v8.9.3
3. install yarn v1.3.2
4. ```yarn && yarn start```

# Environment Variables
- create `.env` file for local and deployment
```
NODE_ENV=production
```

# Key Features
- Express with Webpack 3
- React with Redux / React Router
- Support Typescript
- Docker in Heroku (https://kambing86-redmart.herokuapp.com)
- Docker in Kubernetes / Minikube
- Docker in Openshift / Minishift

# How to deploy to Heroku
```sh
#!/bin/sh
heroku login
heroku container:login
heroku git:remote -a kambing86-redmart
heroku container:push web
```

# How to deploy to Minikube
install minikube
```sh
brew cask install minikube
brew install kubectl
```
start minikube with local registry
```sh
./minikube.sh
```

# How to deploy to Minishift
install minishift
```sh
brew cask install minishift
```
start minishift
```sh
./minishift.sh
```
