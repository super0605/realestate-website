import * as React from "react";
import { mount, shallow } from "enzyme";
import NumberFormat from "react-number-format";
import { Slider } from "antd";
import RangeFilter from "../FilterContent/RangeFilter";
import PButtonSecondary from "../../../components/PButtonSecondary";

describe("RangeFilter", () => {
  let props;
  let mountedRangeFilter;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedRangeFilter) {
      mountedRangeFilter = bShallow
        ? shallow(<RangeFilter {...props} />)
        : mount(<RangeFilter {...props} />);
    }
    return mountedRangeFilter;
  };

  const mockHide = jest.fn();
  const appliedFilter = jest.fn();

  beforeEach(() => {
    props = {
      title: "Price",
      maxVal: 1000000,
      minVal: 0,
      startVal: 0,
      endVal: 1000000,
      unit: "€",
      hide: mockHide,
      appliedFilter,
      valueKey: "price",
    };
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
	});

  it("should render correct title of range filter", () => {
    expect(wrapper.find(".filter-title").text()).toBe("Price");
	});
	
	it("should render correct both start and end value element", () => {
    expect(wrapper.find(NumberFormat).length).toBe(2);
	});

	it("should render range slider element", () => {
    expect(wrapper.find(Slider).length).toBe(1);
	});
	
	it("should render both apply and cancel button", () => {
    expect(wrapper.find(PButtonSecondary).length).toBe(2);
	});
});
