class AppController {
    constructor() {
        this.title = 'Vertex';
    }
}

export const appComponent = {
    template: require('./app.component.html'),
    controller: AppController,
    controllerAs: 'vm'
};
