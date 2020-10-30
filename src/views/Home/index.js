import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Spin } from "antd";
import FilterSection from "./FilterSection";
import MainContentView from "./MainContentView";
import { Container, LoadingArea, ErrView } from "./styled";
import { GET_PROPERTIES } from "../../graphql/queries";
import { defaultFilterOption } from "../../constants/global";

const HomePage = () => {
  const [filterOptions, setFilterOptions] = useState(defaultFilterOption);
  const { loading, error, data, fetchMore } = useQuery(GET_PROPERTIES, {
    variables: {
      offset: 0,
      limit: 12,
      priceGte: filterOptions.price.startVal,
      priceLte: filterOptions.price.endVal,
      pricePerSqmGte: filterOptions.pricePerSqm.startVal,
      pricePerSqmLte: filterOptions.pricePerSqm.endVal,
      sqmGte: filterOptions.sqm.startVal,
      sqmLte: filterOptions.sqm.endVal,
      numberOfBedroom: filterOptions.numberOfBedrooms.value,
      numberOfBathroom: filterOptions.numberOfBathrooms.value,
    },
  });

  const handleFilterOptions = (options) => {
    setFilterOptions(options);
  };

  if (error) {
    return <ErrView>Could not load data from data source.</ErrView>;
  }

  return (
    <Container>
      <FilterSection handleFilterOptions={handleFilterOptions} />
      <LoadingArea size="middle" whole={true} isLoading={loading}>
        <Spin size="large" />
      </LoadingArea>
      <MainContentView
        isLoading={loading}
        apartments={loading ? [] : data.allApartments || []}
        onLoadMore={() => {
          const currentLength = data.allApartments.length;
          fetchMore({
            variables: {
              offset: currentLength,
              limit: 12,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return Object.assign({}, prev, {
                allApartments: [...prev.allApartments, ...fetchMoreResult.allApartments],
              });
            },
          });
        }}
      />
    </Container>
  );
};

export default HomePage;
