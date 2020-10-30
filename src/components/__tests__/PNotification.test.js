import * as React from "react";
import { mount, shallow } from "enzyme";
import pNotification from "../pNotification";

describe("pNotification Component", () => {
  let props;
  let mountedpNotification;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedpNotification) {
      mountedpNotification = bShallow
        ? shallow(<pNotification {...props} />)
        : mount(<pNotification {...props} />);
    }
    return mountedpNotification;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
