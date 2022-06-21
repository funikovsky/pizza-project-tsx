import { FC } from 'react';
import styled from 'styled-components';

const DeleteSvgStyled = styled.div`
  min-width: 40px;
  min-height: 40px;
  align-self: center;
  cursor: pointer;
`;

interface DeleteSvgProps {
  handleClick: () => void;
}

export const DeleteSvg: FC<DeleteSvgProps> = ({ handleClick }) => {
  return (
    <DeleteSvgStyled onClick={() => handleClick()}>
      <svg
        enableBackground="new 0 0 32 32"
        id="Stock_cut"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <desc />
        <g>
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="15"
            stroke="#000000"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            fill="none"
            stroke="#000000"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="8"
            x2="24"
            y1="8"
            y2="24"
          />
          <line
            fill="none"
            stroke="#000000"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="24"
            x2="8"
            y1="8"
            y2="24"
          />
        </g>
      </svg>
    </DeleteSvgStyled>
  );
};
