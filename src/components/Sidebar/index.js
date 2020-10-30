import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { LogoText, MenuItem, DrawerWrap } from "./styled";

const Sidebar = ({ isVisible, handleClose }) => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
    handleClose(false);
  };

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  return (
    <DrawerWrap
      title={<LogoText>Kasaz</LogoText>}
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
      key="left"
    >
      <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["1"]} mode="inline" theme="">
        <MenuItem key="1">SERVICES</MenuItem>
        <MenuItem key="2">GUIDES</MenuItem>
        <MenuItem key="3">BLOG</MenuItem>
        <MenuItem key="4">LOG IN</MenuItem>
      </Menu>
    </DrawerWrap>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default Sidebar;
