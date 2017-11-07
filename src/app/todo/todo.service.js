export class ToDoService {

    constructor($http) {
        this.$http = $http;
        this.API_URL = `${process.env.API_URL}/api/tasks`;
        this.name = '';
    }

    getTasks() {
        return this.$http.get(this.API_URL, { headers: ToDoService.headers() })
            .then(ToDoService.extractHttpData)
            .catch(ToDoService.handleError);
    }

    addTask(task) {
        return this.$http.post(this.API_URL, task, { headers: ToDoService.headers() })
            .then(ToDoService.extractHttpData)
            .catch(ToDoService.handleError);
    }

    updateTask(task) {
        return this.$http.put(`${this.API_URL}/${task.id}`, task, { headers: ToDoService.headers() })
            .then(ToDoService.extractHttpData)
            .catch(ToDoService.handleError);
    }

    static extractHttpData(response) {
        return response.data;
    }

    static handleError(error) {
        throw error;
    }

    static headers() {
        return {
            'Accept': 'application/json;odata=verbose'
        };
    }

}

ToDoService.$inject = [ '$http' ];
