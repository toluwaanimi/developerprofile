import React from "react";
import fire from "../../config/firebaseConfig";


class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            email: '',
            confirm: ''
        }
    }

    handleReset(e) {
        fire.auth().currentUser.updatePassword(this.state.confirm).then(
            res => console.log(res)
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
                                                           placeholder="New Password"/>
                                                </div>
                                                <div className="form-group input-rounded">
                                                    <input type="email" className="form-control" name='confirm'
                                                           onChange={this.handleChange} value={this.state.confirm}
                                                           placeholder="Confirm Password"/>
                                                </div>
                                                <button type="button" className="btn btn-primary btn-block"
                                                        onClick={this.handleReset}> Reset Password
                                                </button>
                                            </form>
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

export default ResetPassword;
