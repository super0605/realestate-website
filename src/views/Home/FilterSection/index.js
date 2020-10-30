import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { produce } from "immer";
import { Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { RangeFilter, CountFilter } from "../FilterContent";
import FilterPopover from "../FilterPopover";
import SearchInput from "../../../components/SearchInput";
import { useWindowDimensions } from "../../../hooks";
import {
  Container,
  FilterElmWrap,
  PBoxWrap,
  FilterGroup,
  LocationInfo,
  FilterGroupLeft,
  FilterGroupRight,
  FilterGroupBtn,
  HiddenBtn,
} from "./styled";
import { defaultFilterOption } from "../../../constants/global";

const FilterSection = ({ handleFilterOptions }) => {
  const [filterOptions, setFilterOptions] = useState(defaultFilterOption);
  const [showFilterBtn, setShowFilterBtn] = useState(true);
  const [showLocationInfo, setShowLocationInfo] = useState(true);
  const { width } = useWindowDimensions();

  const appliedFilter = (valueObj) => {
    const options = produce(filterOptions, (draft) => {
      if (valueObj.type === "range") {
        draft[valueObj.valueKey] = {
          startVal: valueObj.value[0],
          endVal: valueObj.value[1],
        };
      } else {
        draft[valueObj.valueKey] = {
          value: valueObj.value,
        };
      }
    });
    setFilterOptions(options);
    handleFilterOptions(options);
  };

  const handleFetchAll = () => {
    setFilterOptions(defaultFilterOption);
    handleFilterOptions(defaultFilterOption);
  };

  const [
    priceFilterProps,
    pricePerSqmFilterProps,
    sqmFilterProps,
    nOfBedroomsFilterProps,
    nOfBathroomsFilterProps,
  ] = useMemo(() => {
    const price = {
      title: "Price",
      minVal: 0,
      maxVal: 1000000,
      startVal: 0,
      endVal: 1000000,
      unit: "€",
      valueKey: "price",
      appliedFilter,
    };
    const priceSqm = {
      title: "Price Per Sqm",
      minVal: 0,
      maxVal: 10000,
      startVal: 0,
      endVal: 10000,
      unit: "€/m²",
      valueKey: "pricePerSqm",
      appliedFilter,
    };
    const sqm = {
      title: "Square Meter",
      minVal: 0,
      maxVal: 200,
      startVal: 0,
      endVal: 200,
      unit: "m²",
      valueKey: "sqm",
      appliedFilter,
    };
    const bedrooms = {
      title: "Number of Bedrooms",
      minVal: 0,
      maxVal: 10,
      startVal: 0,
      endVal: 10,
      unit: "rooms",
      valueKey: "numberOfBedrooms",
      appliedFilter,
    };
    const bathrooms = {
      title: "Number of Bathrooms",
      minVal: 0,
      maxVal: 10,
      startVal: 0,
      endVal: 10,
      unit: "rooms",
      valueKey: "numberOfBathrooms",
      appliedFilter,
    };

    return [price, priceSqm, sqm, bedrooms, bathrooms];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatPriceBtn = ({ startVal, endVal }) => {
    if (startVal !== null && endVal !== null) {
      const formatTitle = `${startVal / 1000}K € - ${endVal / 1000}K €`;
      return formatTitle;
    } else {
      return "Price";
    }
  };

  const formatPricePerSqmBtn = ({ startVal, endVal }) => {
    if (startVal !== null && endVal !== null) {
      const formatTitle = `${startVal / 1000}K €/m² - ${endVal / 1000}K €/m²`;
      return formatTitle;
    } else {
      return "Price Per Sqm";
    }
  };

  const formatSqmBtn = ({ startVal, endVal }) => {
    if (startVal !== null && endVal !== null) {
      const formatTitle = `${startVal}m² - ${endVal}m²`;
      return formatTitle;
    } else {
      return "Sqm";
    }
  };

  const formatNOfBedroomBtn = ({ value }) => {
    if (value !== null) {
      const formatTitle = `${value}rooms`;
      return formatTitle;
    } else {
      return "Number of bedrooms";
    }
  };

  const formatNOfBathroomBtn = ({ value }) => {
    if (value !== null) {
      const formatTitle = `${value}rooms`;
      return formatTitle;
    } else {
      return "Number of bathrooms";
    }
  };

  const handleFilterGroup = () => {
    setShowFilterBtn(false);
  };

  const handleClose = () => {
    setShowFilterBtn(true);
  };

  useEffect(() => {
    if (width > 1040) {
      setShowFilterBtn(false);
    } else {
      setShowFilterBtn(true);
    }
    if (width < 645) {
      setShowLocationInfo(false);
    } else {
      setShowLocationInfo(true);
    }
  }, [width]);

  return (
    <PBoxWrap>
      <Container>
        {showLocationInfo && <LocationInfo>Barcelona</LocationInfo>}
        {!showLocationInfo && showFilterBtn && <SearchInput />}
        {showFilterBtn && (
          <FilterGroupBtn>
            <Button className="filter-btn" onClick={handleFilterGroup}>
              Filter <FilterOutlined />
            </Button>
          </FilterGroupBtn>
        )}

        {!showFilterBtn && (
          <FilterGroup>
            <FilterGroupLeft>
              <FilterElmWrap>
                <Button onClick={handleFetchAll}>
                  ALL <FilterOutlined />
                </Button>
              </FilterElmWrap>
              <FilterElmWrap>
                <FilterPopover filterContent={RangeFilter} {...priceFilterProps}>
                  <Button className="filter-price">
                    {formatPriceBtn(filterOptions.price)} <FilterOutlined />
                  </Button>
                </FilterPopover>
              </FilterElmWrap>
              <FilterElmWrap>
                <FilterPopover filterContent={RangeFilter} {...pricePerSqmFilterProps}>
                  <Button className="filter-pricePerSqm">
                    {formatPricePerSqmBtn(filterOptions.pricePerSqm)} <FilterOutlined />
                  </Button>
                </FilterPopover>
              </FilterElmWrap>
            </FilterGroupLeft>
            <FilterGroupRight>
              <FilterElmWrap>
                <FilterPopover filterContent={RangeFilter} {...sqmFilterProps}>
                  <Button className="filter-sqm">
                    {formatSqmBtn(filterOptions.sqm)} <FilterOutlined />
                  </Button>
                </FilterPopover>
              </FilterElmWrap>
              <FilterElmWrap>
                <FilterPopover filterContent={CountFilter} {...nOfBedroomsFilterProps}>
                  <Button className="filter-numberOfBedrooms">
                    {formatNOfBedroomBtn(filterOptions.numberOfBedrooms)} <FilterOutlined />
                  </Button>
                </FilterPopover>
              </FilterElmWrap>
              <FilterElmWrap>
                <FilterPopover filterContent={CountFilter} {...nOfBathroomsFilterProps}>
                  <Button className="filter-numberOfBathrooms">
                    {formatNOfBathroomBtn(filterOptions.numberOfBathrooms)} <FilterOutlined />
                  </Button>
                </FilterPopover>
              </FilterElmWrap>
            </FilterGroupRight>
            <HiddenBtn>
              <Button onClick={handleClose}>
                <i className="fa fa-times-circle" />
              </Button>
            </HiddenBtn>
          </FilterGroup>
        )}
      </Container>
    </PBoxWrap>
  );
};

FilterSection.propTypes = {
  handleFilterOptions: PropTypes.func,
};

export default FilterSection;
