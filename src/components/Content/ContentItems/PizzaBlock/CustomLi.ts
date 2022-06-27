import styled from 'styled-components';

export const CustomLi = styled.li`
  width: 100%;
  display: grid;
  column-gap: 4px;

  input {
    display: none;
  }
  label {
    padding: 8px;
    border: transparent;
    border-radius: 7px;
    box-shadow: 1px 1px 1px gray;
    &:active {
      transform: scale(0.95);
    }

    cursor: pointer;
  }
  input:checked + label {
    background: #fff;
  }
`;
