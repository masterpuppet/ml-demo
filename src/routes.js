import App from './App';
import HomeContainer from './components/containers/home';
import ItemsContainer from './components/containers/items';
import ItemContainer from './components/containers/item';
import NoMatchContainer from './components/containers/no-match';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomeContainer
      },
      {
        path: '/items/:id',
        component: ItemContainer
      },
      {
        path: '/items',
        component: ItemsContainer
      },
      {
        path: '*',
        component: NoMatchContainer
      }
    ]
  }
];

export default routes;
