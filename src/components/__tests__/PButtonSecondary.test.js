import * as React from "react";
import { mount, shallow } from "enzyme";
import PButtonSecondary from "../PButtonSecondary";

describe("PButtonSecondary Component", () => {
  let props;
  let mountedPButtonSecondary;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedPButtonSecondary) {
      mountedPButtonSecondary = bShallow
        ? shallow(<PButtonSecondary {...props} />)
        : mount(<PButtonSecondary {...props} />);
    }
    return mountedPButtonSecondary;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
