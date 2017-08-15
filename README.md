# Demo: Todo

This is a demo developed from my [seed repo](https://github.com/brittanymoore/angularjs-vertex). It extends the seed with todo functionality, mocking, and unit tests.

The master branch contains:
* angularJS
* webpack
* component-based routing (@uirouter/angularjs)
* ES6 support (babel)
* unit testing with karma
* end-to-end testing with protractor
* backendless development with mocsk

## Getting Started

### Get the Code

```
git clone https://github.com/brittanymoore/angularjs-demo-todo.git
cd angularjs-demo-todo
npm install
```

### Launch the App

To run the app in development mode:

```
npm run start
```

Once the server is running, open a browser and navigate to localhost:3000.

### Build

| Build Mode        | Command        | Output   | Uglify |
| ----------------- | -------------- | -------  | ------ |
| Dev               | build          | dev      | false  |
| Prod              | build:prod     | dist     | true   |

Each mode has a start command similar to the one above, which can be used to launch the app locally.

```
npm run start
npm run start:prod
```

### Test

Support is built-in for unit testing with Karma and end-to-end testing with Protractor (both use Jasmine).

Unit tests should be added to a file named **.spec.js somewhere in the app directory tree. To run the tests:

```
npm run test:unit
```

E2E tests should be added to a file named **.e2e.js somewhere in the app directory tree. To run the tests:

```
// first-time setup
webdriver-manager update

// run these commands in separate terminals
npm run start
npm run test:e2e
```

### Mocking

This project includes a 'mock' module that provides a fake backend for 
the rest of the application. The todo service is making http calls that are
intercepted by MockModule.








