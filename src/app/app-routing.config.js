const config = ($stateProvider, $urlRouterProvider, $locationProvider) => {

    $locationProvider.html5Mode(true);
    
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('todo', { url: '/', component: 'todo' });

};

config.$inject = [ '$stateProvider', '$urlRouterProvider', '$locationProvider' ];

export const routes = {
    config: config
};
