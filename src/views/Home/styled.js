import styled from "styled-components";
import Divider from "../../components/Divider";

export const Container = styled.div``;

export const DividerH = styled(Divider).attrs(({ theme }) => ({
  height: theme.spacings.spacing_xl,
  width: "100%",
  color: "transparent",
}))``;

export const LoadingArea = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  height: ${({ whole }) => whole && "100vh"};
  position: ${({ whole }) => whole && "fixed"};
  top: ${({ whole }) => whole && 0};
  left: ${({ whole }) => whole && 0};
  background-color: ${({ whole }) => whole && "rgb(217 217 217 / 0.5)"};
`;
