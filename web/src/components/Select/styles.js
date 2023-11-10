import styled from "styled-components";

import chevronDown from "../../assets/chevron-down.svg";

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  > label {
    margin-bottom: 16px;
  }

  > div {
    width: 100%;
    height: 48px;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    margin-top: 8px;
    border-radius: 5px;

    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      width: 100%;

      outline: none;

      border: none;

      background: url(${chevronDown}) no-repeat center right;
    }
  }
`;
