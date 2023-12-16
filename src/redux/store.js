import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currencySlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { conversionReducer } from './conversionSlice';
import { ratesReducer } from './ratesSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, currencyReducer);

export const store = configureStore({
  reducer: {
    currency: persistedReducer,
    conversion: conversionReducer,
    rates: ratesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
