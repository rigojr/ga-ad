import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Login from './containers/Login/Login';
import Minutes from './containers/Minutes/Minutes';
import Profile from './containers/Profile/Profile';
import Users from './containers/Users/Users';
import Companies from './containers/Companies/Companies';
import Templates from './containers/Templates/Templates';

class App extends Component {

  state = {
    authenticated: false
  }

  authenticationHandler = () => {

    console.log("authenticationHandler")
    const auth = this.state.authenticated;
    const authUpdated = !auth;
    this.setState( { authenticated: authUpdated } );

  }

  render(){
    return (
            <Layout 
              isAuthed={this.state.authenticated} 
              authHandler={this.authenticationHandler}>
              <Switch>
                <Route 
                  path="/login"
                  render={ (props) => <Login {...props} authHandler={this.authenticationHandler}/>}/>
                <Route 
                  path="/minutes"
                  render={ (props) => <Minutes {...props} isAuthed={this.state.authenticated}/> } />
                <Route 
                  path="/profile"
                  render={ (props) => <Profile {...props} isAuthed={this.state.authenticated}/> } />
                <Route 
                  path="/users"
                  render={ (props) => <Users {...props} isAuthed={this.state.authenticated}/> } />
                <Route 
                  path="/companies"
                  render={ (props) => <Companies {...props} isAuthed={this.state.authenticated}/> } />
                <Route 
                  path="/templates"
                  render={ (props) => <Templates {...props} isAuthed={this.state.authenticated}/> } />
                <Redirect from="/" to="/login"/>
              </Switch>
            </Layout>
    )
  }
}

export default App;
