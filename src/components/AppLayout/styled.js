import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const LayoutContainer = styled(Layout)`
  min-height: 100vh;
`;

export const MainWrapContainer = styled(Content)`
  background: #f8f9fa;
  z-index: 1;
`;

export const MainContainer = styled.div`
  margin-top: 148px;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  & .feeprofile-new-modal {
    position: absolute;
  }
`;
