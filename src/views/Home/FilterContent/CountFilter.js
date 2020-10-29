import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider, Slider } from "antd";
import PButtonSecondary from "../../../components/PButtonSecondary";
import {
  Container,
  Content,
  Footer,
  TitleText,
  RangeValues,
  ValueElm,
  SliderWrap,
  ActionBtnGroup,
} from "./styled";

const marks = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: {
    style: {
      color: "#f50",
    },
    label: <strong>6</strong>,
  },
};

const CountFilter = ({ hide }) => {
  const [rangeVal, setRangeVal] = useState(0);

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
        <TitleText>Number of Bedroom</TitleText>
        <RangeValues>
          <ValueElm>{rangeVal} - bed rooms</ValueElm>
        </RangeValues>
        <SliderWrap>
          <Slider
            marks={marks}
            step={null}
            defaultValue={0}
            min={0}
            max={6}
            onChange={handleChange}
          />
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

CountFilter.propTypes = {
  hide: PropTypes.func,
};

export default CountFilter;
