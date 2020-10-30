# RealEstate website with React, Ant Design, Apollo GraphQL

This is Realestate website project based on the best practice architecture and modern React stack.

## Prerequisites

* node (tested with 12.x.x or more, might work with others)
* npm or yarn (recommend yarn)

## Installation Steps

* Install [NodeJS](https://nodejs.org/en/)
* Open your favourite console/terminal
* Install __yarn__ 
* Install project dependencies `$ yarn install`
* Return to __project root folder__ `cd ..`
* Start development server `$ yarn start`

## Running website

`$ yarn start`

That will open a browser tab with the app and will keep linter running in a loop.

## Build prod version

`$ yarn build`

Then deploy everything inside /build to an HTTP server.

## Run tests

`$ yarn test` or `$ yarn test --coverage`

First command will watch for source changes and rerun tests as needed.

Second command will also run coverage and display reports.

## Running with Docker & Docker compose

### Run App with Docker Development Environment

```
$ docker-compose up
```

### Run App with Docker Production Environment

```
$ docker-compose -f docker-compose.prod.yml up -d --build
```
