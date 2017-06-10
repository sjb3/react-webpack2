'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('./index.css');
require('normalize.css');

// state
// lifecycle event
// UI

class App extends Component {
    render() {
        return (
        <div>
            React + Redux
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);


