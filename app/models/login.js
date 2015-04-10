import {Backbone, localStorage} from '../libs.js';

var Login = Backbone.Model.extend({
    localStorage: new localStorage('jednakbede.login'),
    parse: function (res) {
        return res[0];
    }
});

module.exports = new Login;