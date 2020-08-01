import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import LeagueTable from "./components/LeagueTable/leagueTable";

const store = configureStore({});

function App() {
    return (
        <Provider store={store}>
            <LeagueTable />
        </Provider>
    );
}

export default App;