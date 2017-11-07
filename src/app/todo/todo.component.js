import { ToDoController } from './todo.controller';

export const toDoComponent = {
    template: require('./todo.component.html'),
    controller: ToDoController,
    controllerAs: 'vm',
    bindings: { }
};
