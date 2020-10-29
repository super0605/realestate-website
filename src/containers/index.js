import React from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import AppLayout from "./Layout";
import HomePage from "./Home";
import themes from "../constants/theme";
import routes from "../constants/routes";

/**
 * will render component with header and side bar
 */
const WithLayout = (Component, type) => (props) => (
  <AppLayout type={type}>
    <Component {...props} />
  </AppLayout>
);

/**
 * if the user is not logged
 *    - can not navigate to dashboard or other pages
 *    - will navigate login page or signup page
 *
 * if the use is logged and stored token to local
 *    - will naviate to dashboard or other pages
 *    - can not naviate to login and signup
 */
const AuthenticatedRoute = ({ token, path, render, component, devMode = true, ...rest }) => {
  if (path === routes.HOME) {
    return <Redirect to={routes.PROPERTY} />;
  }
  return <Route {...rest} path={path} component={component} />;
};

/**
 * Switch managing routing throughout application.
 */
const AppRoutes = () => {
  const access_token = "test";

  return (
    <ThemeProvider theme={themes.default}>
      <Switch>
        <AuthenticatedRoute
          exact
          path={routes.HOME}
          component={WithLayout(HomePage)}
          token={access_token}
        />
        <AuthenticatedRoute
          exact
          path={routes.PROPERTY}
          component={WithLayout(HomePage)}
          token={access_token}
        />
      </Switch>
    </ThemeProvider>
  );
};

export default AppRoutes;
