import { appModule } from './app.module';

describe("app:", () => {

    describe("App Controller:", () => {

        let controller;

        beforeEach(() => {       
            angular.mock.module(appModule.name);
            angular.mock.inject(($componentController) => {
                controller = $componentController('appRoot', {});
            });
        });

        it("Should set the title value on controller.", () => {
            expect(controller.title).toBe("Vertex");
        });

    });

});