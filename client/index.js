/**
 * TODO: set up server-side related tasks
 *
 * OPTIONAL: Read more about diff webpack config files
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import StoreProvider from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
);
