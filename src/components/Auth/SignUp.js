import React from "react";
import fire from "../../config/firebaseConfig";
import history from "../../config/history";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    signUp(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
            e => {
                history.push('login')
                console.log(e)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }

    render() {
        return (
            <div>
                <div className="authentication-theme auth-style_1">
                    <div className="row">
                        <div className="col-lg-5 col-md-7 col-sm-9 col-11 mx-auto">
                            <div className="grid">
                                <div className="grid-body">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-8 col-sm-9 col-12 mx-auto form-wrapper">
                                            <form action="#">
                                                <div className="form-group input-rounded">
                                                    <input type="email" className="form-control" name='email'
                                                           onChange={this.handleChange} value={this.state.email}
                                                           placeholder="Email"/>
                                                </div>
                                                <div className="form-group input-rounded">
                                                    <input type="password" className="form-control"
                                                           value={this.state.password} onChange={this.handleChange}
                                                           name='password'
                                                           placeholder="Password"/>
                                                </div>

                                                <button type="button" className="btn btn-primary btn-block"
                                                        onClick={this.signUp}> Register
                                                </button>
                                            </form>
                                            <div className="signup-link">
                                                <p>Already registered?</p>
                                                <a href="/login">Login</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="auth_footer">
                        <p className="text-muted text-center">© Profile Creator</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
