import styled from "styled-components";
import { Button, Typography } from "antd";

const { Text } = Typography;

export const CustomButton = styled(Button)`
  /* generel style */
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: 0px;
  display: flex;
  padding: 0;
  align-items: center;
  background-color: transparent;
  box-shadow: unset;

  /* hover, focus, active style */
  &.ant-btn[disabled] {
    background-color: transparent;
    background: transparent;
    span {
      color: #757575;
      opacity: 0.4;
    }
  }
  &.ant-btn[disabled]:hover {
    background-color: transparent;
    span {
      color: #757575;
    }
  }
  &.ant-btn[disabled]:focus {
    span {
      color: #757575;
    }
  }

  &:hover {
    background-color: transparent;
    span {
      color: #f05324;
    }
  }
`;

export const ButtonText = styled(Text)`
  ${({ theme }) => theme.components.button.buttonSecondary.textStyle}
  color: ${({ theme, ptype, pchecked }) =>
    pchecked === "true"
      ? theme.colors.primary
      : theme.components.button.buttonSecondary[ptype].color};
`;

export const SecondaryWrapper = styled(Text)`
  padding: 5px;
  ${({ theme }) => theme.components.button.buttonSecondary.textStyle}
  color: ${({ theme, ptype }) => theme.components.button.buttonSecondary[ptype].color};
`;
