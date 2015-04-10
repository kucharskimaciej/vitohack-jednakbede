import {Backbone} from '../libs.js';
import Arrival from './arrival.js';


var Arrivals = Backbone.Collection.extend({
    url: '/api/messages',
    model: Arrival,
    comparator: 'time'
});

module.exports = Arrivals;