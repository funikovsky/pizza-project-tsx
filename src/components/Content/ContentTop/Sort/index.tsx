import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { SortLabel } from './SortLabel';
import { SortPopUp } from './SortPopUp';

const SortStyled = styled.div`
  position: relative;
`;

export const Sort = () => {
  const [isVisiblePopUp, setIsVisiblePopUp] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      const composed = event.composedPath();
      if (!composed.includes(sortRef.current!)) {
        setIsVisiblePopUp(false);
      }
    };

    document.body.addEventListener('click', handleClickOutSide);
    return () => document.body.removeEventListener('click', handleClickOutSide);
  }, []);

  const handleSetVisible = () => {
    setIsVisiblePopUp(!isVisiblePopUp);
  };

  return (
    <SortStyled ref={sortRef} id={'rrr'}>
      <SortLabel handleSetVisible={handleSetVisible} />
      <SortPopUp visible={isVisiblePopUp} handleSetVisible={handleSetVisible} />
    </SortStyled>
  );
};
