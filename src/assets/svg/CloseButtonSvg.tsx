import { FC } from 'react';
import styled from 'styled-components';

const CloseButtonSvgStyled = styled.div`
  position: absolute;
  top: -9%;
  right: -6%;
  cursor: pointer;

  svg {
    fill: #fff;
    width: 30px;
    height: 30px;
    transition: all 0.3s;
    &:hover {
      fill: #fe5f1e;
    }
  }
  @media (max-width: 570px) {
    top: -11%;
    right: 47%;
  }
`;

interface CloseButtonSvgProps {
  handleClickOrder: () => void;
}

export const CloseButtonSvg: FC<CloseButtonSvgProps> = ({ handleClickOrder }) => {
  return (
    <CloseButtonSvgStyled onClick={() => handleClickOrder()}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g data-name="Layer 57" id="Layer_57">
          <path d="M18.83,16l8.59-8.59a2,2,0,0,0-2.83-2.83L16,13.17,7.41,4.59A2,2,0,0,0,4.59,7.41L13.17,16,4.59,24.59a2,2,0,1,0,2.83,2.83L16,18.83l8.59,8.59a2,2,0,0,0,2.83-2.83Z" />
        </g>
      </svg>
    </CloseButtonSvgStyled>
  );
};
