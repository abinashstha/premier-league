import React from 'react';
import {Provider, connect} from 'react-redux';

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <LeagueTable />
    </Provider>
  );
}

export default App;