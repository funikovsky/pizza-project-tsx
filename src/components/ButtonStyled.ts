import styled from 'styled-components'

export const ButtonStyled = styled.div<{mb?:string}>`

  display: flex;
  margin-bottom: ${props => (props.mb + 'px')} ;
  & a {
    display: flex;
    align-items: center;
    line-height: 23px;
    padding: 12px 25px;
    background-color: #fe5f1e;
    border-radius: 30px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    border: 1px solid transparent;
    user-select: none;
  }
  & span {
    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }
  & :hover {
    background-color: #f24701;
  }
`;