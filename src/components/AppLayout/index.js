import React, { useState } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { LayoutContainer, MainWrapContainer, MainContainer, Wrapper } from "./styled";

const AppLayout = ({ children, type }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <LayoutContainer>
      <Layout>
        <MainWrapContainer>
          <Header handleSidebar={setShowSidebar} />
          <MainContainer type={type}>
            <Wrapper>{children}</Wrapper>
          </MainContainer>
        </MainWrapContainer>
      </Layout>
      <Sidebar isVisible={showSidebar} handleClose={handleCloseSidebar} />
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
