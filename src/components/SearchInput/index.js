import React from "react";
import { Input } from "antd";
import { SearchWrap } from "./styled";

const { Search } = Input;

const SearchInput = () => {
  const onSearch = (value) => console.log(value);

  return (
    <SearchWrap>
      <Search
        placeholder="input search text"
        defaultValue="Barcelona"
        onSearch={onSearch}
        enterButton
      />
    </SearchWrap>
  );
};

export default SearchInput;
