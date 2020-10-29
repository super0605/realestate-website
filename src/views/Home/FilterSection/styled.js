import styled from "styled-components";
import PBox from "../../../components/PBox";

export const PBoxWrap = styled(PBox)`
  padding: 24px;
  position: fixed;
  z-index: 3;
  top: 66px;
  left: 0px;
  right: 0px;
  width: 100%;
  border-top: 1px solid #d9d9d9;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterGroup = styled.div`
  display: flex;
`;

export const FilterElmWrap = styled.div`
  padding-left: 24px;
`;

export const LocationInfo = styled.div`
  font-size: 20px;
  font-family: "Roboto";
  font-weight: 600;
`;