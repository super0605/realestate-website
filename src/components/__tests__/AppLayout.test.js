import * as React from "react";
import { mount, shallow } from "enzyme";
import AppLayout from "../AppLayout";

describe("AppLayout Component", () => {
  let props;
  let mountedAppLayout;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedAppLayout) {
        mountedAppLayout = bShallow
        ? shallow(<AppLayout {...props} />)
        : mount(<AppLayout {...props} />);
    }
    return mountedAppLayout;
  };

  beforeEach(() => {
    props = {
      children: "<div>Children element</div>"
    }
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
