import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import { LogoText } from "./styled";

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
    <Drawer
      title={<LogoText>Kasaz</LogoText>}
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
      key="left"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default Sidebar;
