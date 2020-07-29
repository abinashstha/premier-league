import React from 'react';
import { Provider, connect } from "react-redux";
import configureStore from "./redux/configureStore";
import LeagueTable from "./leagueTable";

const store = configureStore({});

function App() {
    return (
        <Provider store={store}>
            <LeagueTable />
        </Provider>
    );
}

export default App;