import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { useDispatch } from 'react-redux';

import { fetchCurrency } from '../redux/operations';
import { setBaseCurrency } from '../redux/currencySlice';

const Converter = lazy(() => import('../pages/Converter'));
const Rates = lazy(() => import('../pages/Rates'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchCurrency(pos.coords));
    }

    function error(err) {
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Converter />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
