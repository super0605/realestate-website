import styled from "styled-components";
import { Layout } from "antd";

const { Content, Footer } = Layout;

export const LayoutContainer = styled(Layout)`
  min-height: 100vh;
`;

export const MainWrapContainer = styled(Content)`
  background: ${({ theme }) => theme.colors.mainBackground};
  max-height: ${({ theme }) => `calc(100vh - ${theme.footer.footerHeight}px)`};
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

export const FooterContainer = styled(Footer)`
  height: ${({ theme }) => theme.footer.footerHeight}px;
  border-top: ${({ theme }) => theme.footer.borderTop};
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0px;
`;
