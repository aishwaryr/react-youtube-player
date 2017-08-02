import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD4lLVfRzb53Z0dLkfTfw6IrbgwBDOGrRE';

// Create a new component, This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
// Take this comp's generated HTML and put it on the Page (DOM)
ReactDOM.render(<App />, document.querySelector('#main'));
