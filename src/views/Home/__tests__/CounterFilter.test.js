import * as React from "react";
import { mount, shallow } from "enzyme";
import { Slider } from "antd";
import CountFilter from "../FilterContent/CountFilter";
import PButtonSecondary from "../../../components/PButtonSecondary";

describe("CountFilter", () => {
  let props;
  let mountedCountFilter;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedCountFilter) {
        mountedCountFilter = bShallow
        ? shallow(<CountFilter {...props} />)
        : mount(<CountFilter {...props} />);
    }
    return mountedCountFilter;
  };

  const mockHide = jest.fn();
  const appliedFilter = jest.fn();

  beforeEach(() => {
    props = {
      title: "Number of Bedrooms",
      minVal: 1,
      maxVal: 10,
      startVal: 1,
      endVal: 10,
      unit: "rooms",
      hide: mockHide,
      appliedFilter,
      valueKey: "numberOfBedrooms",
    };
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
	});

  it("should render correct title of range filter", () => {
    expect(wrapper.find(".filter-title").text()).toBe("Number of Bedrooms");
	});
	
	it("should render correct both start and end value element", () => {
    expect(wrapper.find(".filter-value").length).toBe(1);
	});

	it("should render range slider element", () => {
    expect(wrapper.find(Slider).length).toBe(1);
	});
	
	it("should render both apply and cancel button", () => {
    expect(wrapper.find(PButtonSecondary).length).toBe(2);
	});
});
