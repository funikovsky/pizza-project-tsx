import { Container } from './components/container';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Wrapper } from './components/wrapper';
import { lazy, Suspense, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks/hook';
import { getPizzas } from './redux/slice/pizzaAsyncThunk';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './components/spinners/spinner';
import { NotFoundBlock } from './components/NotFoundBlock';

const CartLazy = lazy(() =>
  import(/*webpackChunkName: "Cart" */ './components/Cart').then((module) => ({
    default: module.Cart,
  })),
);
const FullPizzaLazy = lazy(() =>
  import('./components/FullPizza').then((module) => ({
    default: module.FullPizza,
  })),
);

function App() {
  const dispatch = useAppDispatch();

  const category = useAppSelector((state) => state.pizzas.activeCategory);
  const sortProperty = useAppSelector((state) => state.pizzas.sort.sortProperty);

  useEffect(() => {
    dispatch(getPizzas({ category, sortProperty }));
  }, [category, sortProperty, dispatch]);

  return (
    <>
      <Wrapper>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route
              path="cart"
              element={
                <Suspense fallback={<Spinner />}>
                  <CartLazy />
                </Suspense>
              }
            />

            <Route
              path="/pizza/:id"
              element={
                <Suspense fallback={<Spinner />}>
                  <FullPizzaLazy />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
