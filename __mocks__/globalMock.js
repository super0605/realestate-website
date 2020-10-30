jest.mock("@apollo/react-hooks", () => {
  return {
    useQuery: (query, options) => {
      // ... some logic to decide which query has been requested.
      return {
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
      };
    },
  };
});
