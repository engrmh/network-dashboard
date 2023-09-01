import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register.jsx";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

let routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forget", element: <ForgetPassword /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "new", element: <Dashboard /> },
      { path: "messages", element: <Dashboard /> },
      { path: "report", element: <Dashboard /> },
      { path: "support", element: <Dashboard /> },
      { path: "edu", element: <Dashboard /> },
    ],
  },
];

export default routes;
