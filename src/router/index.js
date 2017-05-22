import MainPage from '../pages/MainPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import Error404Page from '../pages/Error404Page.vue';

const router = {
  routes: [
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '*',
      name: 'Error404Page',
      component: Error404Page,
    },
  ],
};

export default router;
