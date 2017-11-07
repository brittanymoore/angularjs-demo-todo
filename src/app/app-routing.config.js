const config = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('todo', { url: '/', component: 'todo' });
};

config.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export const routes = {
    config: config
};
