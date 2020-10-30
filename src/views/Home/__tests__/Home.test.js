import React from "react";
import { mount, shallow } from "enzyme";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "styled-components";
import HomePage from "../index";
import themes from "../../../constants/theme";
import { GET_PROPERTIES } from "../../../graphql/queries";
import FilterSection from "../FilterSection";

const mocks = [
  {
    request: {
      query: GET_PROPERTIES,
      variables: {
        offset: 0,
        limit: 12,
        priceGte: 25000,
        priceLte: 500000,
        pricePerSqmGte: 1000,
        pricePerSqmLte: 5000,
        sqmGte: 80,
        sqmLte: 150,
        numberOfBedroom: 3,
        numberOfBathroom: 2,
      },
    },
    result: {
      loading: false,
      error: null,
      data: {
        allApartments: [
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
      },
    },
  },
];

export const shallowWithTheme = (children) =>
  shallow(<ThemeProvider theme={themes.default}>{children}</ThemeProvider>);

export const mountWithTheme = (children) =>
  mount(<ThemeProvider theme={themes.default}>{children}</ThemeProvider>);

export const withApollo = (children) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
  </MockedProvider>
);

describe("HomePage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(withApollo(<HomePage />));
  });

  it("should render without problems", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render filter", () => {
    expect(wrapper.find(FilterSection).length).toBe(1);
  });
});
