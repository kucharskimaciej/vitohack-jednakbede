import {Backbone, _} from '../libs.js';
import {list, item} from '../templates.js';
import render from '../mixins/render.js';
import Arrival from '../models/arrival.js';

var ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'card-panel',
    template: item,
    colors: [ 'teal', 'purple', 'pink', 'blue', 'indigo', 'green'],
    initialize: function () {
        this.model.attributes.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.listenTo(this.model, 'change', this.render, this);
    }
});

_.extend(ItemView.prototype, render.item);

var ListView = Backbone.View.extend({
    template: list,
    collectionRoot: '#collection',
    modelView: ItemView,
    initialize: function () {
        this.listenTo(this.collection, 'reset', this.renderChildren, this);
        this.listenTo(this.collection, 'add', this.renderChildren, this);
    },
    addArival: function (attrs) {
        var arrival = new Arrival(attrs, {parse: true});
        this.collection.add(arrival, { merge: true });
    }
});

_.extend(ListView.prototype, render.collection);


module.exports = ListView;
