import LoginView from '../views/login.js';
import MainView from '../views/main.js';
import ListView from '../views/list.js';
import login from '../models/login.js';
import Arrival from '../models/arrival.js';
import Arrivals from '../models/arrivals.js';
import {Backbone} from '../libs.js';

var currentView, rootEl = '#root';

function clear () {
    if(!currentView) return;
    currentView.$el.empty();
    currentView.stopListening();
    currentView.undelegateEvents();

    if(currentView.interval) {
        window.clearInterval(currentView.interval);
    }
}

var AppController = {
    list: function () {
        clear();

        var list = new Arrivals();
        currentView = new ListView({
            el: '#root',
            collection: list
        });
        currentView.render();

        list.fetch({ reset: true });

        currentView.listenTo(window.vent, 'add:arrival', currentView.addArival, currentView);
    },
    main: function () {
        clear();
        currentView = new MainView({
            el: '#root',
            model: new Arrival
        });

        currentView.render();

        currentView.listenTo(window.vent, 'pushups', currentView.onPushups, currentView);
    },
    login: function () {
        clear();

        currentView = new LoginView({
            el: '#root',
            model: login
        });

        currentView.render();
    },
    logout: function () {
        login.destroy();
        Backbone.history.navigate('/login', { trigger: true });
    }
};


module.exports = AppController;