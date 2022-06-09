import { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../redux/hooks/hook';

const SortLabelStyled = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  b {
    margin-right: 10px;
  }
  span {
    color: #fe5f1e;
    border-bottom: 1px dashed #fe5f1e;
    cursor: pointer;
  }
`;

interface SortLabelProps {
  handleSetVisible: () => void;
}

export const SortLabel: FC<SortLabelProps> = ({ handleSetVisible }) => {
  const sortName = useAppSelector((state) => state.pizzas.sort.name);
  return (
    <>
      <SortLabelStyled>
        <b>Сортировка по:</b>
        <span onClick={() => handleSetVisible()}>{sortName}</span>
      </SortLabelStyled>
    </>
  );
};
