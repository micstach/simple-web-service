# simple-web-service
## building
```
git clone <repo>
cd simple-web-service
npm install
node service.js
```
## docker build and run
```
docker build -t <name>/<service-name> .
docker run -p 3000:3000 -d <name>/<service-name>
```
## docker logs
```
docker ps
docker logs <container-id>
```
