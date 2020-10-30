import * as React from "react";
import { mount, shallow } from "enzyme";
import FilterSection from "../FilterSection";
import FilterPopover from "../FilterPopover";
import { defaultFilterOption } from "../../../constants/global";
import { setHookState } from "../../../utils/TestUtils";

describe("FilterSection", () => {
  let props;
  let mountedFilterSection;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedFilterSection) {
      mountedFilterSection = bShallow
        ? shallow(<FilterSection {...props} />)
        : mount(<FilterSection {...props} />);
    }
    return mountedFilterSection;
  };

  const mockHandleFilterOptions = jest.fn();

  beforeEach(() => {
    props = {
      handleFilterOptions: mockHandleFilterOptions,
    };

    React.useState = setHookState({
      filterOptions: defaultFilterOption,
      showFilterBtn: false,
      showLocationInfo: true,
    });

    wrapper = renderWrapper(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render filter group when clicking filter button", () => {
    const filterBtn = wrapper.find(".filter-btn");
    filterBtn.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 5 filter button after clicking filter button", () => {
    expect(wrapper.find(FilterPopover).length).toBe(5);
  });

  it("should render price filter", () => {
    expect(wrapper.find(".filter-price").length).toBe(1);
  });

  it("should render pricePerSqm filter", () => {
    expect(wrapper.find(".filter-pricePerSqm").length).toBe(1);
  });

  it("should render sqm filter", () => {
    expect(wrapper.find(".filter-sqm").length).toBe(1);
  });

  it("should render number of bedrooms filter", () => {
    expect(wrapper.find(".filter-numberOfBedrooms").length).toBe(1);
  });
  
  it("should render number of bathrooms filter", () => {
    expect(wrapper.find(".filter-numberOfBathrooms").length).toBe(1);
  });
});
