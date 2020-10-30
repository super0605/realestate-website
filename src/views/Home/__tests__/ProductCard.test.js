import React from "react";
import { mount, shallow } from "enzyme";
import ProductCard from "../ProductCard";
import NumberFormat from "react-number-format";

describe("ProductCard", () => {
  let props;
  let mountedProductCard;
  let wrapper;

  const renderWrapper = (bShallow) => {
    if (!mountedProductCard) {
      mountedProductCard = bShallow
        ? shallow(<ProductCard {...props} />)
        : mount(<ProductCard {...props} />);
    }
    return mountedProductCard;
  };

  beforeEach(() => {
    props = {
      title: "Lillian West",
      price: 30000,
      pricePerSqm: 4000,
      sqm: 120,
      numberOfBedrooms: 3,
      numberOfBathrooms: 2,
      imgUrl: "house.jpg",
    };

    wrapper = renderWrapper(true);
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render property title", () => {
    expect(wrapper.text().includes("Lillian West")).toBe(true);
  });

  it("should render property price and pricePerSqm", () => {
    expect(wrapper.find(NumberFormat).length).toBe(2);
  });

  it("should render property sqm", () => {
    expect(wrapper.text().includes("120 m²")).toBe(true);
  });

  it("should render property number of bedrooms", () => {
    expect(wrapper.text().includes("3 habs.")).toBe(true);
  });

  it("should render property number of bathrooms", () => {
    expect(wrapper.text().includes("2 baños")).toBe(true);
  });
});
