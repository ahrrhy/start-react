import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './index.css';
import App from './components/pages/App';
import About from './components/pages/About';
import Ticket from './components/pages/Ticket';

import reducer from './reducers/index';
const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/' component={App}/>
                <Route exact path='/about' component={About}/>
                <Route path='/tickets/:id' component={Ticket}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

