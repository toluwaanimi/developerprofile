import React from "react";
import fire from "../../config/firebaseConfig";
import firebase from "../../../../../../Bobs/reactjs-firebase-firestore-crud-master/src/Firebase";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('profile');
        this.state = {
            //the state here
        };


    }

    onSubmit = (e) => {
        e.preventDefault();


        this.ref.add({
            //params
        }).then((docRef) => {
            this.setState({
                //you can do anything with the data
            });
            this.props.history.push("/account")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="grid">
                        <p className="grid-header">Profile</p>
                        <div className="grid-body">
                            <div className="item-wrapper">
                                <div className="row mb-3">
                                    <div className="col-md-8 mx-auto">
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType1">Name</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType1"
                                                       value="Sara Watson"/>
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType12">Email</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="email" className="form-control" id="inputType2"
                                                       value="asfabiv@rud.eu"/>
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType13">Password</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="password" className="form-control" id="inputType3"
                                                       value="00000000"/></div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType1">Number</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="number" className="form-control" id="inputType4"
                                                       value="83393922"/>
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType5">Disabled</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType5"
                                                       value="Hulda Stevenson" disabled/>
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType7">Placeholder</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType7"
                                                       placeholder="Placeholder Text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType8">Read-only</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType8"
                                                       readOnly="readonly" value="Hulda Stevenson"/>
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType9">Textarea</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                            <textarea className="form-control" id="inputType9" cols="12"
                                                      rows="5"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-12 showcase_content_area">
                                                <button type="button" className="btn btn-primary">Primary</button>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Profile;
