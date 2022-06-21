import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyled } from '../ButtonStyled';
import { NotFoundSvg } from './notFoundSvg';

const NotFoundBlockStyled = styled.div`
  padding: 3% 0;
  text-align: center;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    margin-bottom: 20px;
  }
`;

export const NotFoundBlock = () => {
  return (
    <NotFoundBlockStyled>
      <h4>Ошибка 404 Указанной страницы не существует</h4>
      <ButtonStyled>
        <Link to="/">
          <span>Перейти на главную страницу</span>
        </Link>
      </ButtonStyled>
      <NotFoundSvg />
    </NotFoundBlockStyled>
  );
};
