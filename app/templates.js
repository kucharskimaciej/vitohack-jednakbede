import {_} from './libs.js';
var JST = {};

JST['main'] = _.template(`
<div class=""><section class="valign Page-content">
    <h3 class="header center-align red-text thin">Kiedy będziesz, <%= username %>?</h3>
    <div class="row">
        <div class="center-align">
            <a id="minus" class="btn-floating btn-large waves-effect waves-light red"><i class="mdi-content-remove"></i></a>
            <span class="big-text thin grey-text">
                <%= time.format('HH:mm') %>
            </span>
            <a id="plus" class="btn-floating btn-large waves-effect waves-light red"><i class="mdi-content-add"></i></a>
        </div>
    </div>
    <div class="row">
        <div class="col s12 center-align">
            <button id=go class="waves-effect waves-light btn-large"><i class="mdi-device-airplanemode-on left"></i>Lecę, pędzę!</button>
        </div>
    </div>
    <div class="row">
        <div class="col s12 center-align">
            <% if(pushups && pushups.length > 0) { %><h3 class="header center-align green-text thin"><%= pushups %></h3><% } %>
        </div>
    </div>

    <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
        <a href="#/list" class="btn-floating btn-large red">
          <i class="large mdi-navigation-menu"></i>
        </a>
    </div>
    <div class="fixed-action-btn" style="bottom: 45px; left: 24px; right: auto;">
        <a href="#/logout" class="btn-floating btn-large white">
            <i class="large mdi-communication-dnd-on black-text"></i>
        </a>
    </div>

 </section></div>
`);


JST['login'] = _.template(`
 <div class="valign-wrapper"><section class="valign Page-content">
    <h3 class="header center-align red-text thin">Kto idzie?</h3>
    <div class="row">
    <form class="col m8 offset-m2 s12 l6 offset-l3">
        <div class="row">
            <div class="input-field col s12">
                <input id="kurzzeichen" type="text">
                <label for="kurzzeichen">kurcajsien</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 center-align">
                <button type="submit" class="waves-effect waves-light btn">
                    OK
                    <i class="mdi-content-send right"></i>
                </button>
            </div>
        </div>

    </form>
    </div>

 </section></div>
`);

JST['list'] = _.template(`
 <div class="row"><section class="col s12 Page-content">
    <h3 class="header center-align red-text thin">bedą</h3>
    <div class="row">
    <div class="col m8 offset-m2 s12 l6 offset-l3">
       <ul id="collection"></ul>
    </div>
    </div>

    <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
        <a href="#/" class="btn-floating btn-large red">
          <i class="large mdi-device-access-time"></i>
        </a>
    </div>
    <div class="fixed-action-btn" style="bottom: 45px; left: 24px; right: auto;">
        <a href="#/logout" class="btn-floating btn-large white">
            <i class="large mdi-communication-dnd-on black-text"></i>
        </a>
    </div>
 </section></div>
`);

JST['item'] = _.template(`
<div class="row valign-wrapper">
    <div class="col s2">
      <img src="<%= photo %>" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
    </div>
    <div class="col s10">
      <span class="flow-text thin black-text">
        <span class="<%= color %>-text"><%= username %></span> będzie o <%= time.format('HH:mm') %>
      </span>
    </div>
</div>
`);

module.exports = JST;