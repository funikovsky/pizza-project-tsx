import qs from 'qs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorSvg } from '../../assets/svg/Error';
import { useAppSelector } from '../../redux/hooks/hook';
import { ContentItems } from './ContentItems';
import { ContentTitle } from './ContentTitle';
import { ContentTop } from './ContentTop';

const ContentStyled = styled.div``;

export const Content = () => {
  const navigate = useNavigate();
  const category = useAppSelector((state) => state.pizzas.activeCategory);
  const sortProperty = useAppSelector((state) => state.pizzas.sort.sortProperty);
  const visible = useAppSelector((state) => state.pizzas.loading);

  useEffect(() => {
    const queryString = qs.stringify({
      category,
      sortProperty,
    });

    navigate(`?${queryString}`);
  }, [category, sortProperty, navigate]);

  if (visible === 'error') return <ErrorSvg />;

  return (
    <ContentStyled>
      <ContentTop />
      <ContentTitle />
      <ContentItems />
    </ContentStyled>
  );
};
