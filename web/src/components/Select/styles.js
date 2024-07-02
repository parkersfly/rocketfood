import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  > label {
    margin-bottom: 1.6rem;
  }

  > div {
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    margin-top: .8rem;
    border-radius: .5rem;

    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      width: 100%;

      outline: none;

      border: none;


    }
  } */

  width: 100%;
  position: relative;

  font-family: 'Roboto', sans-serif;

  #select-button {
    margin-top: 0.5rem;
    height: 4.8rem;
    display: flex;
    padding: 1.6rem;
    align-items: center;
    justify-content: space-between;

    border-radius: 0.5rem;
    border: 1px solid #252529;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  #selected-value {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
    letter-spacing: 0.02625rem;
  }

  #chevrons svg {
    /* width: 1.6rem;
  height: 1.6rem; */
  }

  #chevrons .chevron-up {
    display: none;
  }

  #options-view-button:focus + #select-button,
  #options-view-button:checked + #select-button {
    outline: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
  }

  #category-select:has(#options-view-button:checked) label,
  #options-view-button:checked + #select-button #chevrons {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  #options-view-button:checked + #select-button #chevrons .chevron-down {
    display: none;
  }

  #options-view-button:checked + #select-button #chevrons .chevron-up {
    display: block;
  }

  #category-select {
    position: relative;
  }

  #options-view-button {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
    z-index: 3;
  }

  /* Options */

  #options {
    width: 100%;
    margin-top: 0.25rem;

    position: absolute;

    border-radius: 0.375rem;
    border: 1px solid #252529;
    background: #17171a;

    display: none;
  }

  .option {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    position: relative;

    padding: 1.2rem;

    border-bottom: 1px solid #252529;
  }

  .option .label {
    color: #fbf9fe;
  }

  .option svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  .option svg:last-child {
    margin-left: auto;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    display: none;
  }

  .option:has(input:checked),
  .option:hover {
    border-bottom: 1px solid #252529;
    background-color: #252529;
  }

  .option:has(input:focus) {
    outline: 1px solid ${({ theme }) => theme.COLORS.CAKE_100};
  }

  .option:has(input:checked) svg:last-child {
    display: block;
  }

  .option input[type='radio'] {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
  }

  .option:nth-child(1) {
    color: #bb9f3a;
  }

  .option:nth-child(2) {
    color: #db5bbf;
  }

  .option:nth-child(3) {
    color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  #category-select:has(#options-view-button:checked) + #options {
    display: block;
  }

  .select:has(.option input:checked) #category-select label {
    color: #a881e6;
  }

  .select:has(.option input:checked) #selected-value {
    color: #fbf9fe;
  }
`
