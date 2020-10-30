import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacings.spacing_xl};
  padding-top: ${({ theme }) => theme.spacings.spacing_xl};
  height: calc(100vh - 150px);
`;

export const NoDataView = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "Roboto";
  color: #d9d9d9;
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
