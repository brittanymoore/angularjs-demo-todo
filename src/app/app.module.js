import angular from 'angular';

// app component
import AppComponent from './app.component';

// modules
import appToDo from './todo/todo.module';
import appMock from './mock/mock.module';

// routing
import uiRouter from '@uirouter/angularjs';
import routes from './app-routing.config';

// styles
import './app.component.scss';
require('font-awesome/css/font-awesome.min.css');

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ uiRouter, appToDo, appMock ])
    .component('myApp', AppComponent)
    .config(routes.config);

export default MODULE_NAME;
