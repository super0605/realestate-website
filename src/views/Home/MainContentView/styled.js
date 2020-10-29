import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacings.spacing_xl};
  padding-top: ${({ theme }) => theme.spacings.spacing_xl};
  height: calc(100vh - 150px);
`;
