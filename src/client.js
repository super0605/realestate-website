import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { apiUrl } from "./config";

/**
 * Create an Apollo Client, Link it to an API,
 *  and export it as a default client
 */

const link = createHttpLink({ uri: apiUrl });
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      allApartments: {
        Apartment: offsetLimitPagination(),
      },
    },
  },
});
const client = new ApolloClient({
  link,
  cache,
});

export default client;
