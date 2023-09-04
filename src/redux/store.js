import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employee";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  employee: employeeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creating a store with the persistedReducer and the middleware.
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Disable serializableCheck for redux-persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Creating a persistor object that is used to persist the store.
export const persistor = persistStore(store);
