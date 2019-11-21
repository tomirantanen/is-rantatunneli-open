# is-rantatunneli-open

[Rantatunneli](https://fi.wikipedia.org/wiki/Tampereen_rantatunneli)
in Tampere is often closed because of heavy traffic or traffic accidents.
This Node.js app will check if rantatunneli is open or closed.

## Running

### Using Docker

Docker image is published to https://hub.docker.com/r/tomirantanen/is-rantatunneli-open.
Pull the image and start the container using command:

```
docker run --rm -p 3000:3000 tomirantanen/is-rantatunneli-open
```

Once the app is running, open http://localhost:3000 in browser or run `curl http://localhost:3000` to check the tunnel status.

### Without Docker

```
npm install
npm run build
npm start
```

## Develop

```
npm install
npm run start:dev
```
