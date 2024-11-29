import AddProperty from "../components/AddProperty";
import Agents from "../components/Agents";
import Home from "../components/Home";
import Lodge from "../components/Lodge";
import Login from "../components/Login";
import RentListing from "../components/RentListing";
import WishList from "../components/WishList";
import AuthLayout from "../layouts/auth";

const authRoutes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        index: true,
        path: "login",
      },
    ],
  },
];

const homeRoutes = [
  {
    path: "home",
    index: true,
    element: <Home />,
  },
  {
    path: "properties",
    element: <Lodge />,
    children: [
      {
        path: "rent",
        element: <RentListing />,
      },
      {
        path: "sell",
        element: <AddProperty />,
      },
      {
        path: "/properties/buy",
        element: <Lodge />,
      },
    ],
  },
  {
    path: "blogs",
    element: <div>Blogs</div>,
  },
  {
    path: "services",
    element: <div>Services Layout</div>,
    children: [
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "agents",
        element: <Agents />,
      },
    ],
  },
];

export { authRoutes, homeRoutes };
