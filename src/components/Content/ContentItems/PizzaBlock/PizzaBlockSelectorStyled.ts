import styled from 'styled-components';

export const PizzaBlockSelectorStyled = styled.div`
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
  .active {
    background-color: #fff;
  }
  ul {
    display: flex;
    column-gap: 4px;
    &:first-of-type {
      margin-bottom: 6px;
    }
  }
  ul li {
    flex: 1 1;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    user-select: none;

    &:hover {
      background: #ffffff;
      box-shadow: 0px 2px 4px rgb(0 0 0 / 4%);
      border-radius: 7px;

      cursor: pointer;
    }
  }
`;
