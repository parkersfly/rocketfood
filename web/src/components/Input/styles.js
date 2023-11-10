import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  
  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  
  > div {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 12px 14px;

    margin-top: 8px;
    
    border-radius: 8px;
    
    background: ${({ theme }) => theme.COLORS.DARK_900};

    svg {
      color:${({ theme }) => theme.COLORS.LIGHT_400};
      margin-right: 14px;
    }
    
    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    input[type="file"] {
      display: none;
    }

    label {
      height: 100%;
    }
  }
`;
