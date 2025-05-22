import { Routes, Route, Navigate, createBrowserRouter, redirect } from 'react-router-dom';
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard"; //possibly unused
import ProjectPage from "../pages/ProjectPage";
import ProjectUsersPage from "../pages/ProjectUsersPage";
import Profile from "../pages/Profile";

//Dummmy auth logic, replace with real auth check later
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,  // your persistent layout with navbar
    loader: () => { //The loader provides info to route element before it proceeds, eg authchecks
      if (!isAuthenticated()) return redirect("/login");
      return null;
    },
    children: [
      {
        path: "home",
        element: <Homepage />, // lists all projects you're on, and some other data
      },
      {
        path: "projects",
        loader: () => redirect("/home"),  // simply redirects /projects to /home
      },
      {
        path: "projects/:projectID",
        element: <ProjectPage />, // project details by ID
      },
      {
        path: "projects/:projectID/users",
        element: <ProjectUsersPage />, //Project list of users
      },
      { 
        path: "profile",
        element: <Profile />,
      },
      // new routes go here
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (isAuthenticated()) return redirect("/projects");
      return null;
    },
  },
]);

export default router;