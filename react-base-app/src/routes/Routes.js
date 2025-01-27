import {createBrowserRouter,Navigate} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Category from "../components/Category";
import ContactUs from "../components/ContactUs";
import Error404 from "../components/Error404";




import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminUserData from "../components/admin/AdminUserData";
import AdminUpdateUserData from "../components/admin/AdminUpdateUserData";
import AdminAddUserData from "../components/admin/AdminAddUserData";

import AdminCategoryData from "../components/admin/AdminCategoryData";
import AdminCreateCategory from "../components/admin/AdminCreateCategory";
import AdminUpdateCategory from "../components/admin/AdminUpdateCategory";
import AdminProjectData from "../components/admin/AdminProjectData";
import AdminAddProjectData from "../components/admin/AdminAddProjectData";

import AdminWebsiteSettings from "../components/admin/AdminWebsiteSettings";

import AdminPagesData from "../components/admin/AdminPagesData";
import AdminAddPageData from "../components/admin/AdminAddPageData";
import AdminUpdatePageData from "../components/admin/AdminUpdatePageData";









const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/page/:page_slug",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    {
        path: '/admin',
        element: <Navigate to="/admin/login" replace />,
    },
    {
      path: "/admin/login",
      element: <AdminLogin />,
    },
    {
      path: "/admin/dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/admin/users",
      element: <AdminUserData />,
    },
    {
      path: "/admin/user/:id",
      element: <AdminUpdateUserData />,
    },
    {
      path: "/admin/adduser",
      element: <AdminAddUserData />,
    },
    {
      path: "/admin/category",
      element: <AdminCategoryData />,
    },
    {
      path: "/admin/create_category",
      element: <AdminCreateCategory />,
    },
    {
      path: "/admin/update_category/:id",
      element: <AdminUpdateCategory />,
    },
    {
      path: "/admin/projects",
      element: <AdminProjectData />,
    },
    {
      path: "/admin/add_project",
      element: <AdminAddProjectData />,
    },
    {
      path: "/admin/add_project/:id",
      element: <AdminAddProjectData />,
    },
    {
      path: "/admin/settings",
      element: <AdminWebsiteSettings />,
    },
    {
      path: "/admin/pages",
      element: <AdminPagesData />,
    },
    {
      path: "/admin/create_page",
      element: <AdminAddPageData />,
    },
    {
      path: "/admin/update_page/:id",
      element: <AdminUpdatePageData />,
    },


    

  ]);
  export default router;