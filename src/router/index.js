import MainPage from '@/pages/MainPage';
import AboutPage from '@/pages/AboutPage';
import Error404Page from '@/pages/Error404Page';

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
