# Run tiledesk-server with Docker

This guide shows how to build and run the Docker image for this fork with a minimal setup.

## Build the image locally

```sh
docker build -t marcos/tiledesk-server:dev .
```

Notes:
- The Dockerfile uses a production install (`npm install --omit=dev`).
- Default exposed port is 3000.

## Run the container

```sh
docker run --rm -p 3000:3000 marcos/tiledesk-server:dev
```

This maps container port 3000 to host port 3000 and removes the container after it stops.

## Environment configuration (optional)

If you need environment variables (e.g., database, Redis, or feature flags), you can pass them with `-e`, or use `--env-file`:

```sh
docker run --rm -p 3000:3000 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  marcos/tiledesk-server:dev
```

Or:

```sh
docker run --rm -p 3000:3000 --env-file ./.env marcos/tiledesk-server:dev
```

## Start command used in the container

The container uses the package start script:

- `npm start` (from package.json)
