var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var localStorage = require('backbone.localstorage');
var moment = require('moment');
var ceil = require('mout/math/ceil');

window.moment = moment;
window.ceil = ceil;

module.exports = { _, Backbone, $, localStorage, moment, ceil };