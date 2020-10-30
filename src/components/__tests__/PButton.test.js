import * as React from "react";
import { mount, shallow } from "enzyme";
import PButton from "../PButton";

describe("PButton Component", () => {
  let props;
  let mountedPButton;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedPButton) {
        mountedPButton = bShallow
        ? shallow(<PButton {...props} />)
        : mount(<PButton {...props} />);
    }
    return mountedPButton;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
