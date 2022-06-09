import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global } from './styles/Global';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Global />
        <App />
      </Provider>
    </BrowserRouter>
  </>,
);
