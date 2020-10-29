import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider, Slider } from "antd";
import NumberFormat from "react-number-format";
import PButtonSecondary from "../../../components/PButtonSecondary";
import {
  Container,
  Content,
  Footer,
  TitleText,
  RangeValues,
  ValueElm,
  DashElm,
  SliderWrap,
  ActionBtnGroup,
} from "./styled";

const RangeFilter = ({ hide }) => {
  const [rangeVal, setRangeVal] = useState([0, 50000]);

  const handleChange = (val) => {
    setRangeVal(val);
  };

  const handleCancel = () => {
    hide();
  };

  const handleApply = () => {
    hide();
  };

  return (
    <Container>
      <Content>
        <TitleText>Price</TitleText>
        <RangeValues>
          <ValueElm>
            <NumberFormat
              displayType={"text"}
              value={rangeVal[0]}
              thousandSeparator={true}
              decimalScale={0}
              suffix="€"
            />
          </ValueElm>
          <DashElm>-</DashElm>
          <ValueElm>
            <NumberFormat
              displayType={"text"}
              value={rangeVal[1]}
              thousandSeparator={true}
              decimalScale={0}
              suffix="€"
            />
          </ValueElm>
        </RangeValues>
        <SliderWrap>
          <Slider range defaultValue={[0, 50000]} min={0} max={50000} onChange={handleChange} />
        </SliderWrap>
      </Content>
      <Divider />
      <Footer>
        <ActionBtnGroup>
          <PButtonSecondary
            ptype="default"
            pname="CANCEL"
            psecondaryAlign="right"
            mright="16px"
            onClick={handleCancel}
          />
          <PButtonSecondary
            ptype="default"
            pname="APPLY"
            psecondaryAlign="right"
            mright="16px"
            onClick={handleApply}
          />
        </ActionBtnGroup>
      </Footer>
    </Container>
  );
};

RangeFilter.propTypes = {
  hide: PropTypes.func,
};

export default RangeFilter;
