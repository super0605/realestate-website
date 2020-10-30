import styled from "styled-components";
import { Menu, Drawer } from "antd";

export const DrawerWrap = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    .ant-drawer-content {
      .ant-drawer-wrapper-body {
        .ant-drawer-body {
          padding: 0px;
        }
      }
    }
  }
`;

export const LogoText = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "Roboto";
  color: #136837;
`;

export const MenuItem = styled(Menu.Item)`
  font-weight: bold;
  font-family: "Roboto";
`;