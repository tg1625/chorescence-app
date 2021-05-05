// import logo from './logo.svg';
import React, {Component} from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";


//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

//Components/Pages
import CreateGroup from './pages/CreateGroup';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Index from './pages/Index';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import GroupDashboard from './pages/GroupDashboard';
import JoinGroup from './pages/JoinGroup';
import EditGroup from './pages/EditGroup';
import UserProfile from './pages/UserProfile';


class App extends Component {
  constructor(props){
    super(props);
    this.logoutFunction = this.logoutFunction.bind(this)
    const user = localStorage.getItem("user");
    if(user && Object.keys(JSON.parse(user)).length > 0){
      this.state = {
        userInfo: JSON.parse(user),
        loggedIn: true
      }
    }
    else{
      this.state = {
        userInfo: {},
        loggedIn: false
      }
    }
  }

  logoutFunction(){
    localStorage.setItem('user', JSON.stringify({}));
    this.setState({userInfo: {}, loggedIn: false});
  }

  toggleLogin(){
    if(this.state.loggedIn){
      localStorage.setItem('user', JSON.stringify({}));
      this.setState({userInfo: {}, loggedIn: false});
    }
    else{
      const data = {
        username: "tatyg",
        lname: "Graesser",
        id: "40e6215d-b5c6-4896-987c-f30f3678f608",
        groups: [
          "40e6215d-b5c6-4886-987c-f30f3678f608", 
          "fa0cc8f7-d57d-4bce-a3f3-106612f64e20"
        ],
        fname: "Tatyana",
        email: "tatygraesser@gmail.com"
      };
      localStorage.setItem('user', JSON.stringify(data));
      console.log("User info", data);
      this.setState({userInfo: data, loggedIn: true});
    }
  }

  componentDidMount(){
    const user = localStorage.getItem("user");
    if(user && Object.keys(JSON.parse(user)).length > 0){
      this.setState({userInfo: user, loggedIn: true});
    }
  }

  render() {
    console.log("Logged in:", this.state.loggedIn);
    console.log("User: ", this.state.userInfo);
    return (
      <div className="siteWrapper">
        <Header loggedIn={this.state.loggedIn} logoutFunction={this.logoutFunction}/>
        {/* <button className="btn-primary" onClick={() => this.toggleLogin()}>
          Toggle Login
        </button> */}

        {/* Routing for the pages */}
        <Router>
          <Switch>
            {/* Homepage route  */}
            <Route exact path="/">
              {
              this.state.loggedIn ? <Redirect to="/dashboard"/> : <Index/> 
              }
            </Route>
            {/* Dashboard routes */}
            <Route exact path="/dashboard">
              {
              !this.state.loggedIn ? <Redirect to="/"/> : <Dashboard/> 
              }
            </Route>
            <Route exact path="/group/:groupId" component={GroupDashboard}/> 
            <Route exact path="/group/:groupId/edit" component={EditGroup}/>
            {/* Group Creation route  */}
            <Route exact path="/creategroup" render={() => <CreateGroup userInfo={this.state.userInfo}/>}/>
            {/* Join a Group Route */}
            <Route exact path="/joingroup" render={() => <JoinGroup userInfo={this.state.userInfo}/>}/>
            {/* User Profile Route */}
            <Route exact path="/profile">
              {
              !this.state.loggedIn ? <Redirect to="/"/> : <UserProfile/>
              }
            </Route>
            {/* Login route  */}
            <Route exact path="/login">
              {
              this.state.loggedIn ? <Redirect to="/dashboard"/> : <Login/> 
              }
            </Route>
            {/* Sign Up Path  */}
            <Route exact path="/signup" component={SignUp}/>
          </Switch>
        </Router>
      
        
      </div>
    );
  }
}

export default App;