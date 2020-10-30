import React from "react";
import { debounce, isEmpty } from "lodash";
import { Row, Col } from "antd";
import PerfectScrollbar from "react-perfect-scrollbar";
import ProductCard from "../ProductCard";
import { Container, NoDataView } from "./styled";

const MainContentView = ({ isLoading, apartments, onLoadMore }) => {
  const handlePagination = (scrollContainer) => {
    scrollContainer.scrollTop = scrollContainer.scrollTop - 30;
    if (apartments.length > 0) {
      onLoadMore();
    }
  };

  return (
    <PerfectScrollbar
      options={{ suppressScrollX: true, wheelPropagation: false, cancelable: false }}
      onYReachEnd={debounce(handlePagination, 100)}
    >
      <Container>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {!isEmpty(apartments)
            ? apartments.map((property, index) => (
                <Col key={index} className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={6}>
                  <ProductCard
                    title={property.title}
                    price={property.price}
                    pricePerSqm={property.pricePerSqm}
                    sqm={property.sqm}
                    numberOfBedrooms={property.numberOfBedrooms}
                    numberOfBathrooms={property.numberOfBathrooms}
                    imgUrl={property.picture}
                  />
                </Col>
              ))
            : !isLoading && <NoDataView>There is no results matching the filter.</NoDataView>}
        </Row>
      </Container>
    </PerfectScrollbar>
  );
};

export default MainContentView;
