const MockService = ($httpBackend, ToDoMockData) => {

    // mock get tasks (SharePoint REST API)
    $httpBackend.whenGET(/api\/tasks$/).respond(() => {
        const returnData = ToDoMockData.getTasks();
        return [ 200, returnData, {} ];
    });

    // mock add tasks (SharePoint REST API)
    $httpBackend.whenPOST(/api\/tasks$/).respond((method, url, data) => {
        const returnData = ToDoMockData.addTask(JSON.parse(data));
        return [ 200, returnData, {} ];
    });

    $httpBackend.whenPUT(/api\/tasks\/\d+$/).respond((method, url, data) => {
        const matches = url.match(/\d+$/);
        const id = parseInt(matches[0], 10);

        if (data.id && id !== data.id) {
            return [ 400 ];
        } else {
            const task = ToDoMockData.updateTask(id, JSON.parse(data));
            return [ 200, task, {} ];
        }
    });

    // pass internal requests through normally
    $httpBackend.whenGET(/\/app/).passThrough(); // routing

};

MockService.$inject = [ '$httpBackend', 'ToDoMockData' ];

export default MockService;
