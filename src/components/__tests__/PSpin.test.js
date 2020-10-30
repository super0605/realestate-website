import * as React from "react";
import { mount, shallow } from "enzyme";
import PSpin from "../PSpin";

describe("PSpin Component", () => {
  let props;
  let mountedPSpin;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedPSpin) {
        mountedPSpin = bShallow
        ? shallow(<PSpin {...props} />)
        : mount(<PSpin {...props} />);
    }
    return mountedPSpin;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
