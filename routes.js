import repositoriesRoutes from './modules/repositories/routes';
import searchRoutes from './modules/search/routes';

export default [
  ...searchRoutes,
  ...repositoriesRoutes,
];
