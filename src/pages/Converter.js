import {
  selectConversionError,
  selectConversionLoading,
  selectConvertedCurrency,
} from '../redux/selectors';
import { Form } from '../components/Form';
import { useSelector } from 'react-redux';
import { Loader } from '../components/Loader';

const Converter = () => {
  const convertedCurrency = useSelector(selectConvertedCurrency);
  const conversionLoading = useSelector(selectConversionLoading);
  const conversionError = useSelector(selectConversionError);

  return (
    <>
      <Form />
      {conversionLoading && <Loader />}
      {conversionError && <p>Error: {conversionError}</p>}
      {convertedCurrency && !conversionLoading && !conversionError && (
        <p>Converted currency: {convertedCurrency}</p>
      )}
    </>
  );
};

export default Converter;
