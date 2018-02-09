import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/app.jsx';

render(<App/>, document.getElementById('app'));

const hotLoader = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

hotLoader(App);

module.hot.accept('./components/app.jsx', () => {
    const NextRootContainer = require('./components/app.jsx').default;
    render(<NextRootContainer />, document.getElementById('react-root'));
})
