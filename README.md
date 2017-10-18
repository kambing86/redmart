# How to Run
1. install chrome
2. install node.js v8.7.0
3. install yarn v1.2.1
4. ```yarn && yarn start:dev```

# Key Features
- Express with Webpack 2
- React with Redux / React Router
- Support Typescript
- Docker in Heroku (https://kambing86-redmart.herokuapp.com)
- Docker in Kubernetes / Minikube
- Docker in Openshift / Minishift

# How to deploy to Heroku
```bash
#!/bin/bash
heroku login
heroku container:login
heroku git:remote -a kambing86-redmart
heroku container:push web
```

# How to deploy to Minikube
start minikube with local registry
```bash
#!/bin/bash
eval $(minikube docker-env)
docker build . -t redmart
docker tag redmart localhost:5000/redmart
docker push localhost:5000/redmart
kubectl config use-context minikube
kubectl run redmart --image=localhost:5000/redmart --port=8080
kubectl expose deployment redmart --type=NodePort
minikube service redmart
```

# How to deploy to Minishift
start minishift
```bash
#!/bin/bash
eval $(minishift docker-env)
docker build . -t redmart
eval $(minishift oc-env)
oc config use-context minishift
docker login -u developer -p $(oc whoami -t) $(minishift openshift registry)
docker tag redmart $(minishift openshift registry)/myproject/redmart
docker push $(minishift openshift registry)/myproject/redmart
oc new-app --image-stream=redmart --name=redmart
oc expose dc redmart --name=redmart --type=NodePort --port=8080
oc expose service redmart
minishift openshift service redmart --in-browser
```