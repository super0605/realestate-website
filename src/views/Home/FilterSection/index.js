import React from "react";
import { withTheme } from "styled-components";
import { Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { RangeFilter, CountFilter } from "../FilterContent";
import FilterPopover from "../FilterPopover";
import { Container, FilterElmWrap, PBoxWrap, FilterGroup, LocationInfo } from "./styled";

const FilterSection = ({ theme }) => {
  return (
    <PBoxWrap>
      <Container>
        <LocationInfo>Barcelona</LocationInfo>
        <FilterGroup>
          <FilterElmWrap>
            <FilterPopover filterContent={RangeFilter}>
              <Button>
                Price <FilterOutlined />
              </Button>
            </FilterPopover>
          </FilterElmWrap>
          <FilterElmWrap>
            <FilterPopover filterContent={RangeFilter}>
              <Button>
                Sqm <FilterOutlined />
              </Button>
            </FilterPopover>
          </FilterElmWrap>
          <FilterElmWrap>
            <FilterPopover filterContent={CountFilter}>
              <Button>
                Number of bedrooms <FilterOutlined />
              </Button>
            </FilterPopover>
          </FilterElmWrap>
          <FilterElmWrap>
            <FilterPopover filterContent={CountFilter}>
              <Button>
                Number of bathrooms <FilterOutlined />
              </Button>
            </FilterPopover>
          </FilterElmWrap>
        </FilterGroup>
      </Container>
    </PBoxWrap>
  );
};

export default withTheme(FilterSection);
