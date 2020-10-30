import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import SearchInput from "../SearchInput";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import {
  PageHeader,
  LogoText,
  LogoWrap,
  MenuWrap,
  Hamburger,
  MenuItem,
  SearchWraper,
} from "./styled";

const HeaderComponent = ({ handleSidebar }) => {
  const toggleCollapsed = () => {
    handleSidebar(true);
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
  handleSidebar: PropTypes.func,
};

export default HeaderComponent;
