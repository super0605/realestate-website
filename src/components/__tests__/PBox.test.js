import * as React from "react";
import { mount, shallow } from "enzyme";
import PBox from "../PBox";

describe("PBox Component", () => {
  let props;
  let mountedPBox;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedPBox) {
        mountedPBox = bShallow
        ? shallow(<PBox {...props} />)
        : mount(<PBox {...props} />);
    }
    return mountedPBox;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
