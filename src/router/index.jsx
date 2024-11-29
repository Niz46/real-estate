import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { authRoutes, homeRoutes } from "./router";
import HomeLayout from "../layouts/home";

function generateRoutes(routes, Layout = null) {
  return routes.map((element) => {
    const routeElement = Layout ? (
      <Layout>{element.element}</Layout>
    ) : (
      element.element
    );

    if (element.children && element.children.length > 0) {
      return (
        <Route key={element.path} path={element.path} element={routeElement}>
          {generateRoutes(element.children, Layout)}
        </Route>
      );
    } else {
      return (
        <Route key={element.path} path={element.path} element={routeElement} />
      );
    }
  });
}

const generatedAuthRoutes = generateRoutes(authRoutes);
const generatedDashboardRoutes = generateRoutes(homeRoutes, HomeLayout);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {generatedAuthRoutes}
      {generatedDashboardRoutes}
      <Route path="*" element={<div>page not found</div>} />
    </>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_normalizeFormMethod: true,
      v7_prependBasename: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_skipActionStatusRevalidation: true,
      v7_fetcherPersist: true,
    },
  }
);

const Routers = () => {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  );
};

export default Routers;
