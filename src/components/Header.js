import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectBaseCurrency } from '../redux/selectors';
import { Loader } from './Loader';

export const Header = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Converter</Link>
            </li>
            <li>
              <Link to="/rates">Rates</Link>
            </li>
          </ul>
        </nav>
        {baseCurrency && <p>Your base currency: {baseCurrency}</p>}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
