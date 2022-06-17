import { Container } from './components/container';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Wrapper } from './components/wrapper';
import { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks/hook';
import { getPizzas } from './redux/slice/pizzaAsyncThunk';
import { Route, Routes } from 'react-router-dom';

import { Cart } from './components/Cart';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
