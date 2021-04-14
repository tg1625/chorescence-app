// import logo from './logo.svg';
import React, {Component} from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import PropTypes from 'prop-types';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

//Components/Pages
import CreateGroup from './pages/CreateGroup';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Index from './pages/Index';
import Login from './pages/Login';
import GroupDashboard from './pages/GroupDashboard';


import JoinGroup from './pages/JoinGroup';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  toggleLogin(){
    this.setState({loggedIn: !this.state.loggedIn})
  }

  render() {
    console.log("Logged in:", this.state.loggedIn);
    return (
      <div className="siteWrapper">
        <Header loggedIn={this.state.loggedIn} />
        <button className="btn" onClick={() => this.toggleLogin()}>
          Toggle Login
        </button>
      
        {/* Routing for the pages */}
        <Router>
          <Switch>
            {/* Homepage route  */}
            <Route exact path="/">
              {
              this.state.loggedIn ? <Redirect to="dashboard"/> : <Index/> 
              }
            </Route>
            {/* Dashboard route */}
            <Route exact path="/dashboard">
            {
              !this.state.loggedIn ? <Redirect to="/"/> : <Dashboard/> 
              }
            </Route>
            <Route exact path="/group">
              {/* {
              !this.state.loggedIn ? (<Redirect to="/"/>) : <GroupDashboard/> 
              } */}
              <GroupDashboard location={this.props.location}/>
              
            </Route>
            {/* Group Creation route  */}
            <Route exact path="/creategroup">
              {/* {
              !this.state.loggedIn ? (<Redirect to="/"/>) : <GroupDashboard/> 
              } */}
              <CreateGroup/>
            </Route>
            <Route exact path="/joingroup">
              {/* {
              !this.state.loggedIn ? (<Redirect to="/"/>) : <GroupDashboard/> 
              } */}
              <JoinGroup/>
            </Route>

            {/* Login route  */}
            <Route exact path="/login">
              {
              this.state.loggedIn ? <Redirect to="dashboard"/> : <Login/> 
              }
            </Route>
            {/* Sign Up Path  */}
            <Route exact path="/signup">
              
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};
export default App;