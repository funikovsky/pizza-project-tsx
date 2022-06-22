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

    cursor: pointer;
  }
  input:checked + label {
    background: #fff;
  }
`;
