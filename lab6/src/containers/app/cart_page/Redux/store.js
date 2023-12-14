import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './dispatchers'


const config = {
    key: 'root',
    storage
}

const persistedReducer  = persistReducer(config, cartReducer)
export const store = createStore(persistedReducer)
export const persistor = persistStore(store);