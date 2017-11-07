import { toDoComponent } from './todo.component';
import { ToDoService } from './todo.service';

import './todo.component.scss';

export const todoModule = angular.module('appToDo', [])
    .component('todo', toDoComponent)
    .service('toDoService', ToDoService);
