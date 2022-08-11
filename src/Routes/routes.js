import TopRepositories from "../Components/TopRepositories/TopRepositories";
import Profile from "../Components/Profile/Profile";
import NotFoundPage from "../Components/404Page/NotFoundPage";
import HomePage from "../Pages/HomePage";

const routes = [
  { id: 1, element: <HomePage />, path: "/" },
  { id: 2, element: <NotFoundPage />, path: "*" },
  { id: 3, element: <Profile />, path: "/username" },
  { id: 4, element: <TopRepositories />, path: "/repositories" },
];

export default routes;
