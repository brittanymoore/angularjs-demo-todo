class ToDoController {

    constructor(ToDoService) {
        this.toDoService = ToDoService;
        this.name = '';
        this.tasks = [];
        this.tasksLoading = true;
    }

    $onInit() {
        this.getTasks();
    }

    onSubmit() {
        this.addTask();
    }

    getTasks() {
        this.toDoService.getTasks()
            .then((data) => {
                this.tasks = data;
                this.tasksLoading = false;
            });
    }

    addTask() {
        this.toDoService.addTask({ name: this.name})
            .then((data) => {
                const newTask = data;
                this.tasks.push(newTask);
            });

        this.name = '';
        this.message = '';
    }

    toggleTaskCompletion(task) {
        task.complete = !task.complete;
        this.toDoService.updateTask(task);
    }

}

ToDoController.$inject = [ 'ToDoService' ];

export default ToDoController;
