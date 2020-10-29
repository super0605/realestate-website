import styled from "styled-components";
import { Layout, Button, Menu } from "antd";

const { Header } = Layout;

export const LogoText = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "Roboto";
  color: #136837;
`;

export const PageHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.07),
    0 2px 1px -1px rgba(0, 0, 0, 0.06);
  height: 66px;
  padding: 0 24px;
`;

export const SettingMenu = styled.div`
  display: flex;
  align-items: center;
  & .menu-icon svg {
    fill: white;
    margin-left: 24px;
  }
`;

export const MenuWrap = styled.div`
  margin-right: -20px;
`;

export const LogoWrap = styled.div`
  display: flex;
`;

export const HamburgerBtn = styled(Button)``;

export const Hamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  color: #136837;
  margin-right: 20px;
`;

export const MenuItem = styled(Menu.Item)`
  font-weight: bold;
  font-family: "Roboto";
`;

export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & .ant-input-search {
    width: 300px;
    .ant-input-wrapper {
      .ant-input {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
      .ant-input-group-addon {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        .ant-input-search-button {
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
    }
  }
`;
