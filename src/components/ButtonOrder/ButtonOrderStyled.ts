import styled from 'styled-components';

export const ButtonOrderStyled = styled.button<{ mb?: string }>`
  background-color: #fe5f1e;
  display: flex;
  align-items: center;
  column-gap: 10px;
  max-width: fit-content;
  padding: 10px 20px;
  border-radius: 30px;
  margin-bottom: ${(props) => props.mb};
  cursor: pointer;
  transition: all 0.3s;
  border: transparent;
  span {
    color: #fff;
    font-weight: 600;
  }
  &:hover {
    background-color: #f24701;
  }
`;
