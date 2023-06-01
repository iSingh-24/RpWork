import React, { createContext, useReducer, useState } from 'react';
import taskReducer from './reducers/taskReducer';
const GlobalStore = createContext();

const initialState = { tasks: [] };

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <GlobalStore.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStore.Provider>
    );
};

export default StoreProvider;

export { GlobalStore };
