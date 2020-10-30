import * as React from "react";
import { mount, shallow } from "enzyme";
import FilterPopover from "../FilterPopover";

describe("FilterPopover", () => {
  let props;
  let mountedFilterSection;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedFilterSection) {
      mountedFilterSection = bShallow
        ? shallow(<FilterPopover {...props} />)
        : mount(<FilterPopover {...props} />);
    }
    return mountedFilterSection;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
