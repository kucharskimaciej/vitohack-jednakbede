import {Backbone, _} from './libs.js';
import AppController from './controllers/app.js';
import loginModel from './models/login.js';

window.vent = _.extend({}, Backbone.Events);

var AppRouter = Backbone.Router.extend({

    routes: {
        'login': 'login',
        'logout': 'logout',
        '': 'main',
        'list': 'list'
    },

    login: AppController.login,
    main: AppController.main,
    list: AppController.list,
    logout: AppController.logout
});

function start () {
    var appRouter = new AppRouter;

    loginModel.fetch().then(function () {
        if(!loginModel.has('username')) {
            window.location.hash = '/login';
            //Backbone.history.navigate('/login', { trigger: true });
        }
        Backbone.history.start();
    });
}

start();