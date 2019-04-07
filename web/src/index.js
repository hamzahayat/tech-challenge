import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import WebFont from 'webfontloader';
import redux from './store/store';

// Import Component
import App from './app';

// Load fonts
WebFont.load({
  google: {
    families: ['Lato:400,700', 'Poppins:400,500,600,700']
  }
});

console.log(process.env);

export default render(
  <Provider store={redux.store}>
    <PersistGate loading={null} persistor={redux.persistor}>
      <ConnectedRouter history={redux.history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
