import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 10px;
  max-width: 1400px;
  @media (max-width: 540px) {
    width: calc(100vw - 40px);
  }
`;
