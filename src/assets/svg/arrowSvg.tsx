import { FC } from 'react';
import styled from 'styled-components';

const ArrowSvgStyled = styled.svg<{ rotate?: number; active?: boolean }>`
  transform: rotate(${(props) => props.rotate}deg);
  background-color: ${(props) => (props.active ? 'red' : '')};
`;

interface ArrowSvgProps {
  rotate?: number;
  active?: boolean;
}

export const ArrowSvg: FC<ArrowSvgProps> = ({ rotate, active }) => {
  return (
    <>
      <ArrowSvgStyled
        rotate={rotate}
        active={active}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill="white"
          d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M10.4142136,11 L17,11 L17,13 L10.4142136,13 L12.7071068,15.2928932 L11.2928932,16.7071068 L6.58578644,12 L11.2928932,7.29289322 L12.7071068,8.70710678 L10.4142136,11 Z"
          fillRule="evenodd"
        />
      </ArrowSvgStyled>
    </>
  );
};
