// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Listado de proyectos",
    navbarName: "Listado de proyectos",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Perfil",
    navbarName: "Perfil",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Tabla",
    navbarName: "Tabla",
    icon: "content_paste",
    component: TableList
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
