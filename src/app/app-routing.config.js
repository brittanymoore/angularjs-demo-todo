const config = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('todo', { url: '/', component: 'todo' });
};

config.$inject = [ '$stateProvider', '$urlRouterProvider' ];

const routes = {
    config: config
};

export default routes;
