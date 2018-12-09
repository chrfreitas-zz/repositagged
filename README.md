# Repositagged

## Prerequisites

You will need the following things properly installed on your computer.

* [Node.js](http://nodejs.org/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* [Git](https://docs.mongodb.com/manual/installation/)
* [MongoDB](https://docs.mongodb.com/manual/installation/)

## Installing

* `git clone <repository-url>` this repository
* `cd <repository-url>`
* `yarn install`

## Getting Started

Starts mongodb running the next command
> mongod

Start the server application
> yarn server:start

Start the client application 
> app:start

Now application is running in
> http://localhost:3000/home

## Scripts

In the project directory, you can run:

### `yarn server:start`

Runs server app in the development mode.<br>

### `yarn app:start`

Runs the app in the development mode.<br>
Open [http://localhost:3000/home](http://localhost:3000/home) to view it in the browser.<br>


### `yarn app:test`

Launches the test runner in the interactive watch mode.<br>


### `yarn app:test:cy`

Starts the ui tests with cypress. It'll show a browser running in realtime mode.<br>
