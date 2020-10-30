import * as React from "react";
import { mount, shallow } from "enzyme";
import Divider from "../Divider";

describe("Divider Component", () => {
  let props;
  let mountedDivider;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedDivider) {
      mountedDivider = bShallow ? shallow(<Divider {...props} />) : mount(<Divider {...props} />);
    }
    return mountedDivider;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
