import React, {Fragment} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import Routes from './router';
import AppProvider from './AppProvider';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
