import React from "react";

class URL extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className="col-lg-6 equel-grid">
                    <div className="grid">
                        <p className="grid-header">Setup Username</p>
                        <div className="grid-body">
                            <div className="item-wrapper">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail1">Email</label>
                                        <input type="email" className="form-control" id="inputEmail1"
                                               placeholder="emmanuel"/>
                                    </div>
                                    <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default URL;
