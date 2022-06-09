import styled from 'styled-components';

import { Button } from './Button';
import { HeaderLogo } from './HeaderLogo';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f6f6f6;
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
