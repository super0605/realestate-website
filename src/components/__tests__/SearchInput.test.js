import * as React from "react";
import { mount, shallow } from "enzyme";
import SearchInput from "../SearchInput";

describe("SearchInput Component", () => {
  let props;
  let mountedSearchInput;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedSearchInput) {
      mountedSearchInput = bShallow
        ? shallow(<SearchInput {...props} />)
        : mount(<SearchInput {...props} />);
    }
    return mountedSearchInput;
  };

  beforeEach(() => {
    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
