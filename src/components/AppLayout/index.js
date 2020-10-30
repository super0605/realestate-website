import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import Header from "../Header";
import { LayoutContainer, MainWrapContainer, MainContainer, Wrapper } from "./styled";

const AppLayout = ({ children, type }) => {
  const wrapperRef = useRef();

  return (
    <LayoutContainer>
      <Layout>
        <MainWrapContainer>
          <Header />
          <MainContainer type={type}>
            <Wrapper ref={wrapperRef}>{children}</Wrapper>
          </MainContainer>
        </MainWrapContainer>
      </Layout>
    </LayoutContainer>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["default", "no_sidebar"]),
};

AppLayout.defaultProps = {
  type: "default",
};

export default AppLayout;
