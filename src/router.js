import Vue from 'vue';
import VueRouter from 'vue-router';


import App from './App.vue'
import Default from './default.vue'
import About from './About.vue'
import Menu from './Menu.vue'
import News from './News.vue'
import ServiceBase from './Servicebase.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        { path: '', component: Default },
        { path: 'about', component: About },
        { path: 'menu', component: Menu },
        { path: 'news', component: News },
        { path: 'servicebase', component: ServiceBase },
      ]
    }
  ],
});