import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;

  #select-button {
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
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  #category-select:has(#options-view-button:checked) label,
  #options-view-button:checked + #select-button #chevrons {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #options-view-button:checked + #select-button #chevrons .chevron-down {
    display: none;
  }

  #options-view-button:checked + #select-button #chevrons .chevron-up {
    display: block;
  }

  #category-select {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
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
    margin-top: 0.8rem;

    position: absolute;

    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
    background: ${({ theme }) => theme.COLORS.DARK_800};

    display: none;

    &[data-set-open-options='true'] {
      display: block !important;
    }
  }

  .option {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    position: relative;

    padding: 1.6rem;

    line-height: 1;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  }

  .option:last-child {
    border-bottom: none !important;
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
    color: ${({ theme }) => theme.COLORS.MINT_100};
    display: none;
  }

  .option:has(input:checked),
  .option:hover {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
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

  .select:has(.option input:checked) #selected-value {
    color: #fbf9fe;
  }

  .option:nth-child(1) {
    color: #f87171;
  }

  .option:nth-child(2) {
    color: #fda4af;
  }

  .option:nth-child(3) {
    color: #fdba74;
  }
`
