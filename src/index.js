import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component, This component should produce some HTML
const App = () => {
    return <div>Hi!</div>
}
// Take this comp's generated HTML and put it on the Page (DOM)
ReactDOM.render(<App />, document.querySelector('#main'));
