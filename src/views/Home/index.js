import React from "react";
import { withTheme } from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { Spin } from "antd";
import FilterSection from "./FilterSection";
import MainContentView from "./MainContentView";
import { Container, LoadingArea } from "./styled";
import { GET_PROPERTIES } from "../../graphql/queries";

const HomePage = ({ theme }) => {
  const { loading, error, data, fetchMore } = useQuery(GET_PROPERTIES, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  const handleFilterOptions = (options) => {
    console.log("111111 ====+>", options)
  }

  if (error) {
    return <p>Error 404</p>;
  }

  return (
    <Container>
      <FilterSection />
      {loading ? (
        <LoadingArea size="middle" whole={true}>
          <Spin size="large" />
        </LoadingArea>
      ) : (
        <MainContentView
          apartments={data.allApartments || []}
          onLoadMore={() => {
            const currentLength = data.allApartments.length;
            fetchMore({
              variables: {
                offset: currentLength,
                limit: 10,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                  allApartments: [...prev.allApartments, ...fetchMoreResult.allApartments],
                });
              },
            })
          }}
        />
      )}
    </Container>
  );
};

export default withTheme(HomePage);
