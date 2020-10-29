import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import client from "./client";
import store, { history } from "./store/configureStore";
import AppRoutes from "./containers";
import "antd/dist/antd.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./assets/styles/index.css";

const AppContainer = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <AppRoutes />
      </Router>
    </Provider>
  </ApolloProvider>
);

export default AppContainer;
