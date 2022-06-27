import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { descriptionPizzas } from '../../common/constans';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { getPizza } from '../../redux/slice/getPizzaAsyncThunk';
import { ButtonStyled } from '../ButtonStyled';
import { NotFoundBlock } from '../NotFoundBlock';
import { Spinner } from '../spinners/spinner';

const FullPizzaStyled = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0 auto;
  text-align: center;
  max-width: 50%;
  padding: 30px 0;
  h4 {
    font-size: 24px;
    margin-bottom: 25px;
  }

  img {
    max-width: 50%;
    min-width: 150px;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 20px;
  }
`;

export const FullPizza = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const pizzaObj = useAppSelector((state) => state.pizzas.fullPizzaById);
  const status = useAppSelector((state) => state.pizzas.statusFullPizza);

  useEffect(() => {
    if (id) {
      dispatch(getPizza(id));
    }
  }, [dispatch, id]);
  if (status === 'error') return <NotFoundBlock />;

  if (pizzaObj && id) {
    const { title, imageUrl } = pizzaObj;
    const description = descriptionPizzas.find((item, index) => index === +id);
    return (
      <FullPizzaStyled>
        <h4>{title}</h4>
        <img src={imageUrl} alt="Pizza" />
        <p>{description}</p>
        <ButtonStyled>
          <Link to="/">
            <span>к выбору пицц</span>
          </Link>
        </ButtonStyled>
      </FullPizzaStyled>
    );
  }

  return <Spinner />;
};
