import { MMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';

// MMKV faster than other persist storage options.

const storage = new MMKV();

export const reduxMMKVStorage: Storage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        storage.delete(key);
        return Promise.resolve();
    },
};
