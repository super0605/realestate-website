import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import client from "./client";
import AppRoutes from "./views";
import "antd/dist/antd.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./assets/styles/index.css";

const history = createBrowserHistory();

const AppContainer = () => (
  <ApolloProvider client={client}>
      <Router history={history}>
        <AppRoutes />
      </Router>
  </ApolloProvider>
);

export default AppContainer;
