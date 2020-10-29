import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import {
  Container,
  ProductImg,
  Descriptoin,
  ValueGroup,
  ValueElm,
  DividerH,
  Overlay,
  OverlayContent,
  Price,
  PricePerSqm,
} from "./styled";

const ProductCard = ({
  title,
  price,
  pricePerSqm,
  sqm,
  numberOfBedrooms,
  numberOfBathrooms,
  imgUrl,
}) => {
  return (
    <Container>
      <ProductImg>
        {imgUrl && <img alt="example" src={imgUrl} />}
        <Overlay>
          <OverlayContent>
            {price && (
              <Price>
                <NumberFormat
                  displayType={"text"}
                  value={price}
                  thousandSeparator={true}
                  decimalScale={0}
                  suffix="€"
                />
              </Price>
            )}
            {pricePerSqm && (
              <PricePerSqm>
                <NumberFormat
                  displayType={"text"}
                  value={pricePerSqm}
                  thousandSeparator={true}
                  decimalScale={3}
                  suffix="€/m²"
                />
              </PricePerSqm>
            )}
          </OverlayContent>
        </Overlay>
      </ProductImg>
      {title && <Descriptoin>{title}</Descriptoin>}
      <ValueGroup>
        {sqm && (
          <ValueElm>
            <i className="fa fa-check-circle" /> {sqm} m²
          </ValueElm>
        )}
        <DividerH />
        {numberOfBedrooms ? (
          <ValueElm>
            <i className="fa fa-bed" /> {numberOfBedrooms} habs.
          </ValueElm>
        ) : (
          <ValueElm>N/A</ValueElm>
        )}
        <DividerH />
        {numberOfBathrooms ? (
          <ValueElm>
            <i className="fa fa-bath" /> {numberOfBathrooms} banos
          </ValueElm>
        ) : (
          <ValueElm>N/A</ValueElm>
        )}
      </ValueGroup>
    </Container>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  pricePerSqm: PropTypes.number,
  sqm: PropTypes.number,
  numberOfBedrooms: PropTypes.number,
  numberOfBathrooms: PropTypes.number,
  imgUrl: PropTypes.string,
};

export default ProductCard;
