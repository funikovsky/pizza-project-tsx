import styled from 'styled-components';

export const OrderFormStyled = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(24, 24, 27, 0.5);
  z-index: 2;
  & > form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 300px;
    width: 500px;
    min-height: 300px;
    border-radius: 30px;
    padding: 20px;
    text-align: center;
    background-color: #ffdf8c;

    & > span {
      font-size: 28px;
      padding-bottom: 30px;
    }
    & div:first-of-type {
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;

      ul {
        display: grid;
        row-gap: 20px;
        padding-bottom: 20px;

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
    }
  }
`;
