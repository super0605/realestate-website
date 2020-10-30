import * as React from "react";
import { mount, shallow } from "enzyme";
import PCheckbox from "../PCheckbox";

describe("PCheckbox Component", () => {
  let props;
  let mountedPCheckbox;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedPCheckbox) {
      mountedPCheckbox = bShallow
        ? shallow(<PCheckbox {...props} />)
        : mount(<PCheckbox {...props} />);
    }
    return mountedPCheckbox;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
