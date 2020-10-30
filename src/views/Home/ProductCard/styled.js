import styled from "styled-components";
import Divider from "../../../components/Divider";

export const Container = styled.div`
  background-color: #ffffff;
  min-height: 143px;
  margin-bottom: 24px;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.07),
    0 2px 1px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px, rgba(0, 0, 0, 0.15) 10px 10px 10px;
  }
`;

export const ProductImg = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  min-height: 150px;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Descriptoin = styled.div`
  font-size: 14px;
  font-family: "Roboto";
  font-weight: 400;
  padding: 10px;
`;

export const ValueGroup = styled.div`
  border-top: 1px solid #d9d9d9;
  padding: 14px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ValueElm = styled.div`
  font-size: 14px;
  font-family: "Roboto";
  font-weight: 600;
`;

export const DividerH = styled(Divider).attrs(({ theme }) => ({
  height: "20px",
  width: "2px",
  color: "#d9d9d9",
}))``;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding: 10px;
`;

export const OverlayContent = styled.div``;

export const Price = styled.div`
  color: #000000;
  font-size: 18px;
  font-family: "Roboto";
  font-weight: 600;
`;
export const PricePerSqm = styled.div`
  color: #000000;
  font-size: 14px;
  font-family: "Roboto";
  font-weight: 400;
`;
