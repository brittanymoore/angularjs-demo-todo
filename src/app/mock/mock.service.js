export const MockService = ($httpBackend, toDoMockData) => {

    // mock get tasks (SharePoint REST API)
    $httpBackend.whenGET(/api\/tasks$/).respond(() => {
        const returnData = toDoMockData.getTasks();
        return [ 200, returnData, {} ];
    });

    // mock add tasks (SharePoint REST API)
    $httpBackend.whenPOST(/api\/tasks$/).respond((method, url, data) => {
        const returnData = toDoMockData.addTask(JSON.parse(data));
        return [ 200, returnData, {} ];
    });

    $httpBackend.whenPUT(/api\/tasks\/\d+$/).respond((method, url, data) => {
        const matches = url.match(/\d+$/);
        const id = parseInt(matches[0], 10);

        if (data.id && id !== data.id) {
            return [ 400 ];
        } else {
            const task = toDoMockData.updateTask(id, JSON.parse(data));
            return [ 200, task, {} ];
        }
    });

    // pass internal requests through normally
    $httpBackend.whenGET(/\/app/).passThrough(); // routing

};

MockService.$inject = [ '$httpBackend', 'toDoMockData' ];
