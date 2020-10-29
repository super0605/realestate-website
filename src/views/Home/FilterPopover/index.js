import React, { useState } from "react";
import { Popover } from "antd";

const FilterPopover = ({ children, filterContent: ContentComponent, ...childProps }) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (val) => {
    setVisible(val);
  };

  function hide() {
    setVisible(false);
  }

  return (
    <Popover
      content={<ContentComponent hide={hide} {...childProps} />}
      placement="bottomLeft"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      {children}
    </Popover>
  );
};

export default FilterPopover;
