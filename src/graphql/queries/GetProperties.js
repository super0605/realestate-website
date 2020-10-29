import gql from "graphql-tag";

const GET_PROPERTIES = gql`
  query GetProperties($offset: Int!, $limit: Int!) {
    allApartments(offset: $offset, limit: $limit) {
      id
      title
      sqm
      price
      pricePerSqm
      numberOfBedrooms
      numberOfBathrooms
      picture
    }
  }
`;

export default GET_PROPERTIES;
