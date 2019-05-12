import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Homepage from './components/Homepage'
import SignIn from './components/Auth/SignIn'
import Dashboard from './components/Dashboard/Dashboard'


import appReducer from './redux/reducer';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logger,
    ),
  );
  return createStore(appReducer, initialState, enhancer);
}

const store = configureStore({});


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem('user')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
  )} />
)

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      token:''
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.setState({
        token:token
      })
      console.log(this.state)
    }
  }
  render() {
    console.log("Props in App.js",this.props)
    return (
    <div>
        <div >
          <Provider store={store}>
            <Router>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/signin' component={SignIn} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            </Router>
          </Provider>
        </div>
    </div>
    );
  }
}

export default App;
