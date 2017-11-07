export class ToDoMockData {

    constructor() {
        this.tasks = [
            { id: 1, name: 'thing I need to do', complete: true },
            { id: 2, name: 'another thing I need to do', complete: false }
        ];
    }

    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        task.id = this.tasks.length + 1;
        this.tasks.push(task);
        return task;
    }

    updateTask(id, task) {
        const index = this.tasks.findIndex((t) => {
            return t.id === id;
        });
        if (index) {
            this.tasks[index] = task;
        } else {
            task.id = this.tasks.length + 1;
            this.tasks.push(task);
        }
        return task;
    }

}
