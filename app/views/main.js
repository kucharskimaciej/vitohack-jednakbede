import {Backbone, _} from '../libs.js';
import {main} from '../templates.js';
import {item} from '../mixins/render.js';

var MainView = Backbone.View.extend({
    template: main,
    events: {
        'click #plus': 'onPlus',
        'click #minus': 'onMinus',
        'click #go': 'onSubmit'
    },
    initialize: function (options) {
        this.opts = options;

        this.listenTo(this.model, 'change', this.render, this);
    },
    onPlus: function () {
        this.model.get('time').add(5, 'minutes');
        this.model.trigger('change');
    },
    onMinus: function () {
        this.model.get('time').subtract(5, 'minutes');
        this.model.trigger('change');
    },
    onSubmit: function (ev) {
        ev.preventDefault();
        window.vent.trigger('new:arrival',  this.model.attributes);
    },
    onPushups: function (pushups) {
        this.model.set('pushups', pushups);
    },
    render: function () {
        var context = _.extend({}, this.model.attributes);
        this.$el.html(this.template(context));
        return this;
    }
});

module.exports = MainView;