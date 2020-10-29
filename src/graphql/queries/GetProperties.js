import gql from "graphql-tag";

const GET_PROPERTIES = gql`
  query GetProperties(
    $offset: Int!
    $limit: Int!
    $priceLte: Float
    $priceGte: Float
    $pricePerSqmLte: Float
    $pricePerSqmGte: Float
    $sqmLte: Float
    $sqmGte: Float
    $numberOfBedroom: Int
    $numberOfBathroom: Int
  ) {
    allApartments(
      filter: {
        priceGte: $priceGte
        priceLte: $priceLte
        pricePerSqmGte: $pricePerSqmGte
        pricePerSqmLte: $pricePerSqmLte
        sqmGte: $sqmGte
        sqmLte: $sqmLte
        numberOfBedroom: $numberOfBedroom
        numberOfBathroom: $numberOfBathroom
      }
      offset: $offset
      limit: $limit
    ) {
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
