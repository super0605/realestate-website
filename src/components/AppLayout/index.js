import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import Header from "../Header";
import MainContainerContext from "../../context/MainContainerContext";
import {
  LayoutContainer,
  MainWrapContainer,
  MainContainer,
  Wrapper,
} from "./styled";

const AppLayout = ({ logout, children, type }) => {
  const wrapperRef = useRef();

  return (
    <LayoutContainer>
      <Layout>
        <MainContainerContext.Provider value={{ getContainer: () => wrapperRef.current || window }}>
          <MainWrapContainer>
            <Header />
            <MainContainer type={type}>
              <Wrapper ref={wrapperRef}>{children}</Wrapper>
            </MainContainer>
          </MainWrapContainer>
        </MainContainerContext.Provider>
      </Layout>
    </LayoutContainer>
  );
};

AppLayout.propTypes = {
  logout: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["default", "no_sidebar"]),
};

AppLayout.defaultProps = {
  type: "default",
};

export default AppLayout;
