import { GET_PROPERTIES } from "../index";

describe("GET_PROPERTIES graphql query", () => {
  it("should be the correct query", () => {
    expect(GET_PROPERTIES).toMatchSnapshot();
  });
});
