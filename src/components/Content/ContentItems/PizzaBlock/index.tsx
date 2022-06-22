import styled from 'styled-components';
import { FC } from 'react';
import { Ipizza } from '../../../../common/types';
import { PizzaBlockBottom } from './PizzaBlockBottom';
import { useAppDispatch } from '../../../../redux/hooks/hook';
import { addItemToCart, sumTotalPrice } from '../../../../redux/slice/cartSlice';
import { useFormik } from 'formik';
import { PizzaBlockSelectorStyled } from './PizzaBlockSelectorStyled';
import { typeNames } from '../../../../common/constans';
import { CustomLi } from './CustomLi';

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
  const { imageUrl, title, types, sizes, id, price } = pizzaItem;

  const dispatch = useAppDispatch();

  const formik = useFormik({
    onSubmit: () => {
      console.log('onSubmit');
      addSelectedItem();
    },
    initialValues: {
      type: types[0],
      size: 0,
    },
  });

  const addSelectedItem = () => {
    const itemPropertyId = `${formik.values.type}${formik.values.size}`;
    const itemCart = {
      id,
      imageUrl,
      title,
      price,
      itemPropertyId,
      size: sizes[formik.values.size],
    };

    dispatch(addItemToCart(itemCart));
    dispatch(sumTotalPrice(price));
  };

  return (
    <PizzaBlockStyled>
      <img src={imageUrl} alt="Pizza" />
      <h4>{title}</h4>
      <form onSubmit={formik.handleSubmit}>
        <PizzaBlockSelectorStyled>
          <ul>
            {types.map((type) => (
              <CustomLi key={type}>
                <input
                  id={typeNames[type] + id}
                  type="radio"
                  name="type"
                  value={formik.values.type}
                  checked={formik.values.type === type}
                  onChange={() => formik.setFieldValue('type', type)}
                />
                <label htmlFor={typeNames[type] + id}>{typeNames[type]}</label>
              </CustomLi>
            ))}
          </ul>

          <ul>
            {sizes.map((size, index) => (
              <CustomLi key={index}>
                <input
                  id={size.toString() + id}
                  type="radio"
                  name="size"
                  value={formik.values.size}
                  checked={formik.values.size === index}
                  onChange={() => formik.setFieldValue('size', index)}
                />
                <label htmlFor={size.toString() + id}>{size} см</label>
              </CustomLi>
            ))}
          </ul>
        </PizzaBlockSelectorStyled>
        <PizzaBlockBottom pizzaItem={pizzaItem} />
      </form>
    </PizzaBlockStyled>
  );
};
