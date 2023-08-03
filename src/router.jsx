import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register.jsx";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword.jsx";

let routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forget", element: <ForgetPassword /> },
];

export default routes;
