import styled from 'styled-components';
import { PizzaLogoSvg } from '../../assets/svg/PizzaLogoSvg';
import { Link } from 'react-router-dom';

const HeaderLogoStyled = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 20px 0;
    svg {
      margin-right: 10px;
    }
    h1 {
      font-size: 24px;
      font-weight: 800;
    }
    p {
      color: #7b7b7b;
    }
  }
  @media (max-width: 678px) {
    p {
      max-width: 150px;
    }
  }
`;

export const HeaderLogo = () => {
  return (
    <>
      <HeaderLogoStyled>
        <Link to="/">
          <PizzaLogoSvg />
          <div>
            <h1>Alex Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
      </HeaderLogoStyled>
    </>
  );
};
