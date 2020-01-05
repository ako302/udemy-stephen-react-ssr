import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from './pages/AdminListPage';
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
        ...AdminsListPage
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
