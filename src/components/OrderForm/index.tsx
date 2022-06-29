import { useFormik } from 'formik';
import { FC } from 'react';
import { ArrowSvg } from '../../assets/svg/arrowSvg';
import { CloseButtonSvg } from '../../assets/svg/CloseButtonSvg';
import { ButtonOrderStyled } from '../ButtonOrder/ButtonOrderStyled';
import { ChoiceRestorantStyled } from './ChoiceRestorantStyled';
import { OrderFormStyled } from './OrderFormStyled';
import { PickupFormStyled } from './PickupForm';

interface OrderFormProps {
  orderVisible: boolean;
  handleClickOrder: () => void;
}

export const OrderForm: FC<OrderFormProps> = ({ orderVisible, handleClickOrder }) => {
  const orderTypes = ['Самовывоз', 'Поем в ресторане', 'Доставка курьером'];
  const restaurantAddress = ['Уральская 43', 'Невский проспект 16', 'Софийская 37'];
  const customerInfo = ['Ваше имя', 'Телефон'];
  const formik = useFormik({
    onSubmit: (data) => {
      console.log(data);
      handleClickOrder();
      alert('Заказ успешно отправлен');
    },
    initialValues: {
      orderType: 0,
      addressRestaurant: 0,
      name: '',
      phone: '',
      addressPickup: '',
    },
  });

  if (orderVisible) {
    return (
      <OrderFormStyled>
        <form onSubmit={formik.handleSubmit}>
          <span>Заполните данные о доставке</span>
          <div>
            <ul>
              {orderTypes.map((orderType, index) => (
                <li key={index}>
                  <input
                    id={`${index}`}
                    type="radio"
                    name="order"
                    value={formik.values.orderType}
                    onChange={() => formik.setFieldValue('orderType', index)}
                    checked={formik.values.orderType === index}
                  />
                  <label htmlFor={`${index}`}>{orderType}</label>
                </li>
              ))}
            </ul>
          </div>

          <CloseButtonSvg handleClickOrder={handleClickOrder} />

          <PickupFormStyled>
            <span>Ваше имя</span>
            <input
              required
              type="text"
              value={formik.values.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formik.setFieldValue('name', e.target.value)
              }
            />
            <span>Телефон</span>
            <input
              required
              type="text"
              value={formik.values.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formik.setFieldValue('phone', e.target.value)
              }
            />
            {formik.values.orderType === 2 && (
              <>
                <span>Адрес доставки</span>
                <input
                  type="text"
                  required
                  value={formik.values.addressPickup}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    formik.setFieldValue('addressPickup', e.target.value)
                  }
                />
              </>
            )}
          </PickupFormStyled>
          {formik.values.orderType < 2 && (
            <ChoiceRestorantStyled>
              <ul>
                {restaurantAddress.map((address, index) => (
                  <li key={index}>
                    <input
                      id={address}
                      type="radio"
                      name="restaurant"
                      value={formik.values.addressRestaurant}
                      onChange={() => formik.setFieldValue('addressRestaurant', index)}
                      checked={formik.values.addressRestaurant === index}
                    />
                    <label htmlFor={address}>{address}</label>
                  </li>
                ))}
              </ul>
            </ChoiceRestorantStyled>
          )}

          <ButtonOrderStyled type="submit">
            <span>Заказать</span>
            <ArrowSvg rotate={180} />
          </ButtonOrderStyled>
        </form>
      </OrderFormStyled>
    );
  } else return <></>;
};
