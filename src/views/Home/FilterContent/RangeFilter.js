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

const RangeFilter = ({ title, maxVal, minVal, startVal, endVal, unit, hide, appliedFilter, valueKey }) => {
  const [rangeVal, setRangeVal] = useState([startVal || minVal, endVal || maxVal]);

  const handleChange = (val) => {
    setRangeVal(val);
  };

  const handleCancel = () => {
    setRangeVal([startVal || minVal, endVal || maxVal]);
    hide();
  };

  const handleApply = () => {
    const fData = {
      type: "range",
      valueKey: valueKey,
      value: rangeVal,
    }
    appliedFilter(fData);
    hide();
  };

  return (
    <Container>
      <Content>
        <TitleText className="filter-title">{title}</TitleText>
        <RangeValues>
          <ValueElm>
            <NumberFormat
              displayType={"text"}
              value={rangeVal[0]}
              thousandSeparator={true}
              decimalScale={0}
              suffix={unit || "€"}
            />
          </ValueElm>
          <DashElm>-</DashElm>
          <ValueElm>
            <NumberFormat
              displayType={"text"}
              value={rangeVal[1]}
              thousandSeparator={true}
              decimalScale={0}
              suffix={unit || "€"}
            />
          </ValueElm>
        </RangeValues>
        <SliderWrap>
          <Slider
            range
            defaultValue={[startVal || minVal, endVal || maxVal]}
            min={minVal || 0}
            max={maxVal || 0}
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

RangeFilter.propTypes = {
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

export default RangeFilter;
