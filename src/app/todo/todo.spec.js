import { todoModule } from './todo.module';
import { mockModule } from './../mock/mock.module';

describe('UNIT: ToDo:', () => {

    beforeEach(() => {
        angular.mock.module(todoModule.name);
        angular.mock.module(mockModule.name);
    });

    describe('Controller:', () => {

        let controller, toDoService, toDoMockData, deferred, $rootScope;

        beforeEach(() => {

            // inject dependencies
            angular.mock.inject(($componentController, _toDoService_, _toDoMockData_, $q, _$rootScope_) => {
                
                toDoService = _toDoService_;
                toDoMockData = _toDoMockData_;
                $rootScope = _$rootScope_;

                // spy on service functions and return promises
                deferred = $q.defer();
                spyOn(toDoService, 'getTasks').and.returnValue(deferred.promise);
                spyOn(toDoService, 'addTask').and.returnValue(deferred.promise);

                controller = $componentController('todo', {
                    toDoService: toDoService
                });
            }); 

        });

        describe('Get Tasks:', () => {

            it('Should call service to get tasks.', () => {
                controller.getTasks();
                expect(toDoService.getTasks).toHaveBeenCalled();
            });

            it('Should set internal tasks variable based on service results.', () => {
                controller.getTasks();
                deferred.resolve(toDoMockData.getTasks());
                $rootScope.$digest();
                expect(controller.tasks.length).toBe(toDoMockData.tasks.length);
            });

        });

        describe('Add Task:', () => {

            it('Should call service to add task.', () => {
                controller.name = 'Test thing to do';
                controller.addTask();
                expect(toDoService.addTask).toHaveBeenCalled();
            });

        });

    });

});