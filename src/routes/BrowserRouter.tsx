import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { RouteListType, RouteType } from '@/routes/type';
import { FC, lazy, Suspense } from 'react';

const ErrorPage = lazy(() => import('@/pages/Errors/ErrorPage'));
import Routes from './Routes';

// Protected Route Component
const ProtectedRoute: FC<RouteType> = ({ layout: Layout, component: Component, auth }) => {
  if (!auth) {
    return <Navigate to='/?login' replace />;
  }

  return Layout ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <Component />
  );
};

const ElementLayoutRouter = (route: RouteType) => {
  const Layout = route?.layout;
  const auth = route?.auth;
  const Component = route?.component;

  if (auth) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute layout={Layout} component={Component} auth={auth} />
      </Suspense>
    );
  }

  return Layout ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Component />
      </Layout>
    </Suspense>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

const BrowserChildrenRouter = (route: RouteType) => {
  if (!isEmpty(route?.children) && typeof route?.children !== 'undefined') {
    const routesListChildren: RouteType[] = [];
    const routesChildren = route?.children;

    for (const routeChildKey in routesChildren) {
      const routeChildren = routesChildren[routeChildKey];

      routeChildren.element = <ElementLayoutRouter {...routeChildren} />;
      if (!isEmpty(routeChildren) && !isEmpty(routeChildren?.children) && typeof routeChildren?.children !== 'undefined') {
        routeChildren.children = BrowserChildrenRouter(routeChildren);
      }
      routesListChildren.push({
        ...routeChildren,
        errorElement: <Suspense fallback={<div>Loading...</div>}><ErrorPage /></Suspense>
      });
    }

    return routesListChildren;
  }
};

const BrowserRouter = () => {
  const routes: RouteType[] = Routes.map((route: RouteListType) => {
    route.element = <ElementLayoutRouter {...route} />;

    const response: RouteType = {};

    if (!isEmpty(route) && !isEmpty(route?.children) && typeof route?.children !== 'undefined') {
      response.children = BrowserChildrenRouter(route);
    }

    response.path = route.path;
    response.loader = route.loader;
    response.element = <ElementLayoutRouter {...route} />;

    return response;
  });

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default BrowserRouter;
