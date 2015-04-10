import {Backbone, _} from '../libs.js';
import {login} from '../templates.js';
import {item} from '../mixins/render.js';

var LoginView = Backbone.View.extend({
    template: login,
    events: {
        'focus input': 'onInputFocusBlur',
        'blur input': 'onInputFocusBlur',
        'submit form': 'onSubmit'
    },
    onInputFocusBlur: function (ev) {
        this.$(ev.target).siblings('label').toggleClass('active')
    },
    onSubmit: function (ev) {
        ev.preventDefault();

        this.model.save({
            username: this.$('#kurzzeichen').val()
        }).then(function () {
            Backbone.history.navigate('/', { trigger: true });
        })
    }
});

_.extend(LoginView.prototype, item);

module.exports = LoginView;