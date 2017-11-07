import 'angular-mocks/angular-mocks';

import { MockService } from './mock.service';
import { ToDoMockData } from './models/todo.mock';

export const mockModule = angular.module('appMock', [ 'ngMockE2E' ])
    .service('toDoMockData', ToDoMockData)
    .run(MockService);
