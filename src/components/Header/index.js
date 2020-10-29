import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { Menu } from "antd";
import SearchInput from "../SearchInput";
import { MenuOutlined } from "@ant-design/icons";
import { PageHeader, LogoText, LogoWrap, MenuWrap, Hamburger, MenuItem, SearchWraper } from "./styled";

const HeaderComponent = ({ theme }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <PageHeader>
      <LogoWrap>
        <Hamburger onClick={toggleCollapsed}>
          <MenuOutlined />
        </Hamburger>
        <LogoText>KASAZ</LogoText>
      </LogoWrap>
      <SearchWraper>
        <SearchInput />
      </SearchWraper>
      <MenuWrap>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <MenuItem key="1">SERVICES</MenuItem>
          <MenuItem key="2">GUIDES</MenuItem>
          <MenuItem key="3">BLOG</MenuItem>
          <MenuItem key="4">LOG IN</MenuItem>
        </Menu>
      </MenuWrap>
    </PageHeader>
  );
};

HeaderComponent.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(HeaderComponent);
