import { default as angular } from 'angular';

// app component
import { appComponent } from './app.component';

// modules
import { todoModule } from './todo/todo.module';
import { mockModule } from './mock/mock.module';

// routing
import { default as uiRouter } from '@uirouter/angularjs';
import { routes } from './app-routing.config';

// styles
import './app.component.scss';
import './../../node_modules/material-design-icons/iconfont/material-icons.css';

export const appModule = angular.module('app', [ uiRouter, todoModule.name, mockModule.name ])
    .component('appRoot', appComponent)
    .config(routes.config);
