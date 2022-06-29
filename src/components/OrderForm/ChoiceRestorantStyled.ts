import styled from 'styled-components';

export const ChoiceRestorantStyled = styled.div`
  ul {
    display: flex;
    column-gap: 20px;
    justify-content: space-around;

    padding-bottom: 30px;

    input {
      display: none;
    }
    label {
      cursor: pointer;
    }

    input:checked + label {
      background-color: #fe5f1e;
      padding: 10px 15px;
      color: white;
      border-radius: 30px;
    }
  }
`;
