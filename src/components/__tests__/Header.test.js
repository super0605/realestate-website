import * as React from "react";
import { mount, shallow } from "enzyme";
import HeaderComponent from "../Header";

describe("Header Component", () => {
  let props;
  let mountedHeaderComponent;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedHeaderComponent) {
      mountedHeaderComponent = bShallow
        ? shallow(<HeaderComponent {...props} />)
        : mount(<HeaderComponent {...props} />);
    }
    return mountedHeaderComponent;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
