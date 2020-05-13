import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import ForgotPassword from "./components/Auth/ForgotPassword";
import fire from "./config/firebaseConfig";
import ResetPassword from "./components/Auth/ResetPassword";


/**basic functionalities
 * User Login
 * User Sign Up
 * Account Verification ( If needed)
 * Password Reset
 * Forgot Password
 * Setup Profile
 * Update Profile
 * View Profile through username
 * share profile
 * Profile Picture
 **/
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.authListener()
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user})
                localStorage.setItem('user', user.uid)
            } else {
                this.setState({user: null})
                localStorage.removeItem('user')
            }
        })
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        {/*<Route exact path='/' component={Home}/>*/}
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={SignUp}/>
                        <Route path='/forgot' component={ForgotPassword}/>
                        <Route path='/reset' component={ResetPassword}/>
                    </Switch>
                    {/*{this.state.user ? (<SignUp/>) : (<Login/>)}*/}
                </div>
            </Router>

        );
    }


}

export default App;
