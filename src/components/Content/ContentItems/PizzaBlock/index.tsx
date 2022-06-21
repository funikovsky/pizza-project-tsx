import styled from 'styled-components';
import { FC, useState } from 'react';
import { Ipizza } from '../../../../common/types';
import { PizzaBlockBottom } from './PizzaBlockBottom';
import { PizzablockSelector } from './PizzaBlockSelector';
import { useAppDispatch } from '../../../../redux/hooks/hook';
import { addItemToCart, sumTotalPrice } from '../../../../redux/slice/cartSlice';
import { useFormik } from 'formik';

const PizzaBlockStyled = styled.div`
  width: 280px;
  text-align: center;
  img {
    width: 100%;
  }
`;

export interface IPizzaBlock {
  pizzaItem: Ipizza;
}

export const PizzaBlock: FC<IPizzaBlock> = ({ pizzaItem }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const { imageUrl, title, types, sizes, id, price } = pizzaItem;

  const dispatch = useAppDispatch();

  const addSelectedItem = () => {
    const itemPropertyId = `${activeType}${activeSize}`;
    const itemCart = {
      id,
      imageUrl,
      title,
      price,
      itemPropertyId,
      size: sizes[activeSize],
    };

    dispatch(addItemToCart(itemCart));
    dispatch(sumTotalPrice(price));
  };

  const formik = useFormik({
    onSubmit: () => {
      console.log('onSubmit');
      addSelectedItem();
    },
    initialValues: {
      type: 0,
    },
  });

  return (
    <PizzaBlockStyled>
      <img src={imageUrl} alt="Pizza" />
      <h4>{title}</h4>
      <form onSubmit={formik.handleSubmit}>
        <PizzablockSelector
          types={types}
          sizes={sizes}
          id={id}
          activeType={activeType}
          activeSize={activeSize}
          setActiveType={(type: number) => setActiveType(type)}
          setActiveSize={(size: number) => setActiveSize(size)}
        />
        <PizzaBlockBottom pizzaItem={pizzaItem} />
      </form>
    </PizzaBlockStyled>
  );
};
