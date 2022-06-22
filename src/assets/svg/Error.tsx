import styled from 'styled-components';

const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 32px;
  font-weight: bold;
  div {
    margin-bottom: 40px;
    text-align: center;
  }

  svg {
    height: 200px;
    width: 200px;
  }
`;

export const ErrorSvg = () => {
  return (
    <ErrorStyled>
      <div> Произошла ошибка загрузки данных с сервера</div>
      <svg
        style={{ overflow: 'visible', background: '0 0 32 32' }}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          <g id="Error_1_">
            <g id="Error">
              <circle cx="16" cy="16" id="BG" r="16" style={{ fill: '#D72828' }} />
              <path
                d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z"
                id="Exclamatory_x5F_Sign"
                style={{ fill: '#E6E6E6' }}
              />
            </g>
          </g>
        </g>
      </svg>
    </ErrorStyled>
  );
};
