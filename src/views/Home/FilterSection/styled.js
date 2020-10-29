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

  @media (max-width: 1048px) {
    width: 80%;
    justify-content: space-evenly;
  }
  @media (max-width: 580px) {
    width: 90%;
    justify-content: space-between;
  }
  @media (max-width: 460px) {
    display: block;
    width: 90%;
  }
`;

export const FilterElmWrap = styled.div`
  padding-left: 24px;

  @media (max-width: 1048px) {
    padding: 10px 0;
  }
`;

export const LocationInfo = styled.div`
  font-size: 20px;
  font-family: "Roboto";
  font-weight: 600;
`;

export const FilterGroupLeft = styled.div`
  display: flex;

  @media (max-width: 1048px) {
    display: block;
  }
`;

export const FilterGroupRight = styled.div`
  display: flex;

  @media (max-width: 1048px) {
    display: block;
  }
`;

export const FilterGroupBtn = styled.div`
  display: none;
  @media (max-width: 1048px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const HiddenBtn = styled.div`
  display: none;
  position: absolute;
  top: 0px;
  right: 24px;
  & button {
    font-size: 26px;
    border: 0px;
    padding-right: 0px;
    padding-top: 20px;
  }

  @media (max-width: 1048px) {
    display: block;
  }
`;
