import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminListPage from './pages/AdminListPage';
import App from './App';

export default [
  {
    ...App,
    routes:[
      {
        path: "/",
        ...HomePage,
        exact: true
      },
      {
        path: "/admins",
        ...AdminListPage
      },
      {
        path: "/users",
        ...UsersListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
