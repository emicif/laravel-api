/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//import AppComponent from './app/AppComponent'

//AppComponent = require('./app/AppComponent');
window.axios = require('axios');
window.axios.get('http://127.0.0.1:8000/api/posts').then(results => {
    console.log(results);
}).catch(e => {
    console.log(e);
});


window.Vue = require('vue');


AppComponent = require('./app/AppComponent.vue').default

const app = new Vue({
    el: '#app',
    render: (h) => h(AppComponent) //'h' si può cambiare->es. start
    //router
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);



