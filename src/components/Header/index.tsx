import styled from 'styled-components';

import { Button } from './Button';
import { HeaderLogo } from './HeaderLogo';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #f6f6f6;
  @media (max-width: 678px) {
    justify-content: center;
  }
`;

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderLogo />
        <Button />
      </HeaderStyled>
    </>
  );
};
