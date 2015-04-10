import {Backbone, moment, ceil} from '../libs.js';
import login from './login.js';

var ArrivalModel = Backbone.Model.extend({
    url: 'http://hello.com/arrival',
    defaults: function () {
        var time = moment().minutes( ceil(moment().minutes(), 5) );

        return {
            time: time,
            username: login.get('username'),
            pushups: ""
        }
    },
    toJSON: function () {
        return JSON.stringify({
            time: this.get('time').format('HH:mm'),
            username: this.get('username')
        });
    },
    parse: function (attr) {
        attr.time = attr.time || attr.Time;
        if('string' === typeof attr.time) {
            attr.time = moment(attr.time, "HH:mm");
        }
        attr.username = attr.username || attr.UserName;
        attr.pushups = attr.pushups || "";
        attr.id = attr.username;
        attr.photo = attr.photo || "http://www.placecage.com/c/200/200";
        return attr;
    }
});

module.exports = ArrivalModel;