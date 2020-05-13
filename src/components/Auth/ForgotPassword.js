import React from "react";
import fire from "../../config/firebaseConfig";


class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.handleForgot = this.handleForgot.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            email: ''
        }
    }

    handleForgot(e) {
        fire.auth().sendPasswordResetEmail(this.state.email).then(
            e => console.log(e)
        ).catch(
            error => console.log(error)
        )
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
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
                                                <button type="button" className="btn btn-primary btn-block"
                                                        onClick={this.handleForgot}> Reset Password
                                                </button>
                                            </form>
                                            <div className="signup-link">
                                                <p>Don't have an account yet?</p>
                                                <a href="/register">Sign Up</a>
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

export default ForgotPassword;
