# Requirements

Docker Desktop:

[Get Docker](https://docs.docker.com/get-started/get-docker/)

Node:

[official](https://nodejs.org/en/download/)
or
[brew (macOS)](https://formulae.brew.sh/formula/node)

# First time start up

## Firbase Setup

First place the firebase serviceAccountKey.json within the backend directory

within the main directory run the following command

```shell
docker compose up -d
```

frontend link
[localhost:5173](http://localhost:5173/)

## Getting rid of linting errors locally

To make your ide happy, add packages locally with node

```shell
cd backend # and frontend
npm i
```

# Updating Packages

If you need to add a new package to the frontend or backend

## Shutdown docker

```shell
docker compose down
```

## Add packages locally

```shell
cd backend # or frontend
npm install some-package
npm install @types/some-package --save-dev   # for TypeScript dependencies
```

## Rebuild container

```shell
docker compose build backend # or frontend
docker compose up
```
