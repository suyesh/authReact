import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from 'components/App';
import Welcome from 'components/Welcome';
import SignUp from 'components/Auth/SignUp';
import SignOut from 'components/Auth/SignOut';
import reducers from 'Reducers';
import Feature from 'components/Feature';
import SignIn from 'components/Auth/SignIn';

const store = createStore(
	reducers,
	{ auth: { authenticated: localStorage.getItem('token') } },
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" component={Welcome} exact />
				<Route path="/signup" component={SignUp} />
				<Route path="/feature" component={Feature} />
				<Route path="/signout" component={SignOut} />
				<Route path="/signin" component={SignIn} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
