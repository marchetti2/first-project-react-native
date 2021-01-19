import React from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';

import store from './store';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#444a5a" />
        <Routes />
      </Provider>
    </>
  );
}
