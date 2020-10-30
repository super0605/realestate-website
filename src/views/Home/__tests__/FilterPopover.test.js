import * as React from "react";
import { mount, shallow } from "enzyme";
import FilterPopover from "../FilterPopover";
import { RangeFilter } from "../FilterContent";

describe("FilterPopover", () => {
  let props;
  let mountedFilterPopover;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedFilterPopover) {
      mountedFilterPopover = bShallow
        ? shallow(<FilterPopover {...props} />)
        : mount(<FilterPopover {...props} />);
    }
    return mountedFilterPopover;
  };

  beforeEach(() => {
    props = {
      filterContent: RangeFilter,
    };
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
