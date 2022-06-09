import { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../../redux/hooks/hook';
import { ISort, setSort } from '../../../../redux/slice/pizzaSlice';

const SortPopUpStyled = styled.div`
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;

  ul li {
    padding: 12px 20px;
    cursor: pointer;
    &:hover {
      background: rgba(254, 95, 30, 0.05);
    }
  }
`;

interface SortPopUpProps {
  visible: boolean;
  handleSetVisible: () => void;
}

export const SortPopUp: FC<SortPopUpProps> = ({ visible, handleSetVisible }) => {
  const sortList = [
    { name: 'Популярности', sortProperty: 'raiting' },
    { name: 'Цене', sortProperty: 'price' },
    { name: 'Алфавиту', sortProperty: 'title' },
  ];

  const dispatch = useAppDispatch();

  const handleClickPopUp = (obj: ISort) => {
    dispatch(setSort(obj));
    handleSetVisible();
  };

  return (
    <>
      {visible && (
        <SortPopUpStyled>
          <ul>
            {sortList.map((obj, index) => (
              <li key={index} onClick={() => handleClickPopUp(obj)}>
                {obj.name}
              </li>
            ))}
          </ul>
        </SortPopUpStyled>
      )}
    </>
  );
};
