import React from "react";

class NotFound extends React.Component {
    render() {
        return (
            <div className="error_page error_2">
                <div className="container inner-wrapper">
                    <h1 className="display-1 error-heading">404</h1>
                    <h2 className="error-code">Page Not Found</h2>
                    <p className="error-message">The page you are looking for might have been removed had its name
                        changed or is temporarily unavailable.</p>
                    <a href="/" className="btn btn-primary">Back to Home</a>
                </div>
            </div>
        );
    }
}
export default NotFound;
