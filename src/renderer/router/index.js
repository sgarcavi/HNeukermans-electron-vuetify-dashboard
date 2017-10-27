import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome-view',
      component: require('@/components/WelcomeView'),
    },
    {
      path: '/inspire',
      name: 'inspire',
      component: require('@/components/InspireView'),
    },
    {
      path: '/tcp',
      name: 'process',
      component: require('@/components/TcpPortList'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
