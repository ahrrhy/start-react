import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, Link } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './components/pages/App';
import './index.css';
import reducer from './reducers';
import About from './components/pages/About';
import Track from './components/pages/Track';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(createHistory(), store);




ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path='/' component={App}/>
                <Route path='/about' component={About}/>
                <Route path='/tracks/:id' component={Track}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

