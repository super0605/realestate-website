import React from "react";
import { mount, shallow } from "enzyme";
import MainContentView from "../MainContentView";
import ProductCard from "../ProductCard";

describe("MainContentView", () => {
  let props;
  let mountedMainContentView;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedMainContentView) {
      mountedMainContentView = bShallow
        ? shallow(<MainContentView {...props} />)
        : mount(<MainContentView {...props} />);
    }
    return mountedMainContentView;
  };

  beforeEach(() => {
    props = {
      apartments: [
        {
          id: "QXBhcnRtZW50LTEwMDA=",
          numberOfBathrooms: 2,
          numberOfBedrooms: 3,
          picture: "house.jpg",
          price: 30000,
          pricePerSqm: 4000,
          sqm: 120,
          title: "Lillian West",
          __typename: "Apartment",
        },
      ],
    };

    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render product card", () => {
    expect(wrapper.find(ProductCard).length).toBe(1);
  });
});
