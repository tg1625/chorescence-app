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
import SignUp from './pages/SignUp';
import GroupDashboard from './pages/GroupDashboard';
import JoinGroup from './pages/JoinGroup';
import EditGroup from './pages/EditGroup';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo: {},
      loggedIn: false
    }
  }

  toggleLogin(){
    if(this.state.loggedIn){
      localStorage.setItem('user', JSON.stringify({}));
      this.setState({userInfo: {}})
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
      this.setState({userInfo: data});
    }
    this.setState({loggedIn: !this.state.loggedIn});
  }

  componentDidMount(){
    const user = localStorage.getItem("user");
    if(user){
      this.setState({userInfo: user});
      this.setState({loggedIn: true});
    }
  }

  render() {
    console.log("Logged in:", this.state.loggedIn);
    return (
      <div className="siteWrapper">
        <Header loggedIn={this.state.loggedIn} />
        <button className="btn-primary" onClick={() => this.toggleLogin()}>
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
            <Route exact path="/group/:groupId" component={GroupDashboard}/>
             
            <Route exact path="/group/:groupId/edit" component={EditGroup} />
              {/* {
              !this.state.loggedIn ? (<Redirect to="/"/>) : <GroupDashboard/> 
              } */}
              {/* <EditGroup/> */}
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
            {
              this.state.loggedIn ? <Redirect to="dashboard"/> : <SignUp/> 
              }
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

// App.propTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   })
// };
export default App;