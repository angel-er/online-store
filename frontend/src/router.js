import React, {lazy, Suspense} from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import ErrorBoundary from './ErrorBoundary';
import {PUBLIC_ROUTE} from './route.constants';
import Loader from './components/utility/loader';
import {initProducts} from './redux/product/actions';
// import SignIn from './containers/Pages/SignIn/SignIn';
// import ForgotPassword from './containers/Pages/ForgotPassword/ForgotPassword';
// import ResetPassword from './containers/Pages/ResetPassword/ResetPassword';
// import Page404 from './containers/Pages/404/404';
// import Page500 from './containers/Pages/500/500';
// import Dashboard from './containers/Dashboard/Dashboard';
// import asyncComponent from './helpers/asyncComponent';

// const Dashboard = lazy(() => import('./containers/Dashboard/Dashboard'));

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import('./containers/Page/Home')),
  },
];
function PrivateRoute({children, ...rest}) {
  const isLoggedIn = useSelector((state) => state.Auth.idToken);

  return (
    <Route
      {...rest}
      render={({location}) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: {from: location},
            }}
          />
        )
      }
    />
  );
}

export default function Routes() {
  const dispatch = useDispatch();
  dispatch(initProducts());
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
            <PrivateRoute path='/dashboard'>
              {/* <Dashboard /> */}
              <h1>Dashboard</h1>
            </PrivateRoute>
            {/* <Route
              exact
              path={PUBLIC_ROUTE.LANDING}
              render={() => <SignIn />}
            />
            <Route
              exact
              path={PUBLIC_ROUTE.SIGN_IN}
              render={() => <SignIn />}
            />
            <Route
              exact
              path={PUBLIC_ROUTE.FORGOT_PASSWORD}
              render={() => <ForgotPassword />}
            />
            <Route
              exact
              path={PUBLIC_ROUTE.RESET_PASSWORD}
              render={() => <ResetPassword />}
            />
            <Route
              exact
              path={PUBLIC_ROUTE.PAGE_404}
              render={() => <Page404 />}
            />
            <Route
              exact
              path={PUBLIC_ROUTE.PAGE_500}
              render={() => <Page500 />}
            />
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute> */}
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
