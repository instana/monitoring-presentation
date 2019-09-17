# Twoot

## How to start

### Database

```
docker run --detach \
    --publish 27017:27017 \
    --publish 27018:27018 \
    --name mongodb \
    mongo

```

### Backend

```
cd backend
mvn spring-boot:run
```

### UI

```
cd ui
npm install
npm start
```

### Proxy

```
cd ui
npm run proxy
```

### Browser

```
open http://127.0.0.1:3002
```
