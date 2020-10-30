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
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: {
    style: {
      color: "#f50",
    },
    label: <strong>10</strong>,
  },
};

const CountFilter = ({ hide, title, minVal, maxVal, startVal, endVal, unit, appliedFilter, valueKey }) => {
  const [rangeVal, setRangeVal] = useState(0);

  const handleChange = (val) => {
    setRangeVal(val);
  };

  const handleCancel = () => {
    setRangeVal(0);
    hide();
  };

  const handleApply = () => {
    const fData = {
      type: "static",
      valueKey: valueKey,
      value: rangeVal,
    }
    appliedFilter(fData)
    hide();
  };

  return (
    <Container>
      <Content>
        <TitleText className="filter-title">{title}</TitleText>
        <RangeValues>
          <ValueElm className="filter-value">
            {rangeVal} - {unit}
          </ValueElm>
        </RangeValues>
        <SliderWrap>
          <Slider
            marks={marks}
            step={null}
            defaultValue={0}
            min={minVal}
            max={maxVal}
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
  title: PropTypes.string,
  minVal: PropTypes.number,
  maxVal: PropTypes.number,
  startVal: PropTypes.number,
  endVal: PropTypes.number,
  unit: PropTypes.string,
  appliedFilter: PropTypes.func,
  valueKey: PropTypes.string,
};

export default CountFilter;
