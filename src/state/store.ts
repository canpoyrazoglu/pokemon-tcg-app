import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import { reduxMMKVStorage } from "./mmkv";
import { pokemonApi } from "./pokemonApi";
import { savedCards } from "./savedCards";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: reduxMMKVStorage
}

const rootReducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [savedCards.name]: savedCards.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                warnAfter: 256,
            },
            immutableCheck: { warnAfter: 256 },
        }).concat(pokemonApi.middleware),
})

export const persistor = persistStore(store);
export type StoreState = ReturnType<(typeof store)['getState']>;