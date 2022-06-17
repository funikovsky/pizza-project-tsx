import styled from 'styled-components';
import DotLoader from 'react-spinners/DotLoader';
import { css } from '@emotion/react';

const SpinnerStyled = styled.div`
  margin: 0 auto;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #fe5f1e;
  `;
  return (
    <SpinnerStyled>
      <DotLoader color={'#fe5f1e'} loading={true} css={override} size={150} />
    </SpinnerStyled>
  );
};
