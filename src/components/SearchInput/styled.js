import styled from "styled-components";

export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & .ant-input-search {
    width: 300px;
    @media (max-width: 499px) {
      width: 250px;
    }
    @media (max-width: 380px) {
      width: 200px;
    }
    .ant-input-wrapper {
      .ant-input {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
      .ant-input-group-addon {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        .ant-input-search-button {
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
    }
  }
`;