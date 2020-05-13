import React from "react";
import fire from "../../config/firebaseConfig";
import '../../assests/materialdesignicons.css'
import Profile from "./CreateProfile";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import NotFound from "../NotFound";
import URL from "./UrlSetUp";
import SocialMedia from "./SocialMedia";
import history from "../../config/history";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout(e) {
        fire.auth().signOut().then(
            this.props.history.push('/login')
        ).catch(
            err => console.log(err)
        );
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="t-header">
                        {/*<div className="t-header-brand-wrapper">*/}
                        {/*</div>*/}
                        <div className="t-header-content-wrapper">
                            <div className="t-header-content">
                                <button className="t-header-toggler t-header-mobile-toggler d-block d-lg-none">
                                    <i className="mdi mdi-menu"></i>
                                </button>
                                <ul className="nav ml-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" onClick={this.logout} id="messageDropdown"
                                           data-toggle="dropdown"
                                           aria-expanded="false">
                                            <i className="mdi mdi-logout-variant mdi-1x" onClick={this.logout}></i>
                                            <span
                                                className="notification-indicator notification-indicator-primary notification-indicator-ripple"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="page-body">
                        <div className="sidebar">
                            <div className="user-profile">
                                {/*<div className="display-avatar animated-avatar">*/}
                                {/*    <img className="profile-img img-lg rounded-circle"*/}
                                {/*         src="../assets/images/profile/male/image_1.png" alt="profile image"/>*/}
                                {/*</div>*/}
                                <div className="info-wrapper">
                                    <p className="user-name">Allen Clerk</p>
                                    <h6 className="display-income">$3,400,00</h6>
                                </div>
                            </div>
                            <ul className="navigation-menu">
                                <li className="nav-category-divider">MAIN</li>
                                <li>
                                    <Link to='/account'>
                                        <span className="link-title">Dashboard</span>
                                        <i className="mdi mdi-gauge link-icon"></i>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/account/url'>
                                        <span className="link-title">Set Username</span>
                                        <i className="mdi mdi-clipboard-outline link-icon"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/account/links'>
                                        <span className="link-title">Social Media</span>
                                        <i className="mdi mdi-link link-icon"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='#'>
                                        <span className="link-title">Link</span>
                                        <i className="mdi mdi-at link-icon"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="page-content-wrapper">
                            <div className="page-content-wrapper-inner">
                                <Switch>
                                    <Route exact path='/account' component={Profile}/>
                                    <Route path='/account/url' component={URL}/>
                                    <Route path='/account/links' component={SocialMedia}/>

                                    <Route path='**' component={NotFound}/>
                                </Switch>

                                {/*      <div className="content-viewport">*/}
                                {/*          <div className="row">*/}
                                {/*              <div className="col-12 py-5">*/}
                                {/*                  <h4>Dashboard</h4>*/}
                                {/*                  <p className="text-gray">Welcome aboard, Allen Clerk</p>*/}
                                {/*              </div>*/}
                                {/*          </div>*/}
                                {/*          <div className="row">*/}
                                {/*              <div className="col-md-3 col-sm-6 col-6 equel-grid">*/}
                                {/*                  <div className="grid">*/}
                                {/*                      <div className="grid-body text-gray">*/}
                                {/*                          <div className="d-flex justify-content-between">*/}
                                {/*                              <p>30%</p>*/}
                                {/*                              <p>+06.2%</p>*/}
                                {/*                          </div>*/}
                                {/*                          <p className="text-black">Traffic</p>*/}
                                {/*                          <div className="wrapper w-50 mt-4">*/}
                                {/*                              <canvas height="45" id="stat-line_1"></canvas>*/}
                                {/*                          </div>*/}
                                {/*                      </div>*/}
                                {/*                  </div>*/}
                                {/*              </div>*/}
                                {/*              <div className="col-md-3 col-sm-6 col-6 equel-grid">*/}
                                {/*                  <div className="grid">*/}
                                {/*                      <div className="grid-body text-gray">*/}
                                {/*                          <div className="d-flex justify-content-between">*/}
                                {/*                              <p>43%</p>*/}
                                {/*                              <p>+15.7%</p>*/}
                                {/*                          </div>*/}
                                {/*                          <p className="text-black">Conversion</p>*/}
                                {/*                          <div className="wrapper w-50 mt-4">*/}
                                {/*                              <canvas height="45" id="stat-line_2"></canvas>*/}
                                {/*                          </div>*/}
                                {/*                      </div>*/}
                                {/*                  </div>*/}
                                {/*              </div>*/}
                                {/*              <div className="col-md-3 col-sm-6 col-6 equel-grid">*/}
                                {/*                  <div className="grid">*/}
                                {/*                      <div className="grid-body text-gray">*/}
                                {/*                          <div className="d-flex justify-content-between">*/}
                                {/*                              <p>23%</p>*/}
                                {/*                              <p>+02.7%</p>*/}
                                {/*                          </div>*/}
                                {/*                          <p className="text-black">Bounce Rate</p>*/}
                                {/*                          <div className="wrapper w-50 mt-4">*/}
                                {/*                              <canvas height="45" id="stat-line_3"></canvas>*/}
                                {/*                          </div>*/}
                                {/*                      </div>*/}
                                {/*                  </div>*/}
                                {/*              </div>*/}
                                {/*              <div className="col-md-3 col-sm-6 col-6 equel-grid">*/}
                                {/*                  <div className="grid">*/}
                                {/*                      <div className="grid-body text-gray">*/}
                                {/*                          <div className="d-flex justify-content-between">*/}
                                {/*                              <p>75%</p>*/}
                                {/*                              <p>- 53.34%</p>*/}
                                {/*                          </div>*/}
                                {/*                          <p className="text-black">Marketing</p>*/}
                                {/*                          <div className="wrapper w-50 mt-4">*/}
                                {/*                              <canvas height="45" id="stat-line_4"></canvas>*/}
                                {/*                          </div>*/}
                                {/*                      </div>*/}
                                {/*                  </div>*/}
                                {/*              </div>*/}
                                {/*              <div className="col-lg-5 col-md-6 col-sm-12 equel-grid">*/}
                                {/*                  <div className="grid">*/}
                                {/*                      <div className="grid-body">*/}
                                {/*                          <div className="split-header">*/}
                                {/*                              <p className="card-title">Available Balance</p>*/}
                                {/*                              <span className="btn action-btn btn-xs component-flat"*/}
                                {/*                                    data-toggle="tooltip" data-placement="left"*/}
                                {/*                                    title="Available balance since the last week">*/}
                                {/*  <i className="mdi mdi-information-outline text-muted mdi-2x"></i>*/}
                                {/*</span>*/}
                                {/*                          </div>*/}
                                {/*                          <div className="d-flex align-items-end mt-2">*/}
                                {/*                              <h3>26.00453100</h3>*/}
                                {/*                              <p className="ml-1 font-weight-bold">BTC</p>*/}
                                {/*                          </div>*/}
                                {/*                          <div className="d-flex mt-2">*/}
                                {/*                              <div className="wrapper d-flex pr-4">*/}
                                {/*                                  <small*/}
                                {/*                                      className="text-success font-weight-medium mr-2">USD</small>*/}
                                {/*                                  <small className="text-gray">$103,342.50</small>*/}
                                {/*                              </div>*/}
                                {/*                              <div className="wrapper d-flex">*/}
                                {/*                                  <small*/}
                                {/*                                      className="text-primary font-weight-medium mr-2">EUR</small>*/}
                                {/*                                  <small className="text-gray">$91,105.00</small>*/}
                                {/*                              </div>*/}
                                {/*                          </div>*/}
                                {/*                          <div className="d-flex flex-row mt-4 mb-4">*/}
                                {/*                              <button*/}
                                {/*                                  className="btn btn-outline-light text-gray component-flat w-50 mr-2"*/}
                                {/*                                  type="button">SEND*/}
                                {/*                              </button>*/}
                                {/*                              <button className="btn btn-primary w-50 ml-2"*/}
                                {/*                                      type="button">RECEIVE*/}
                                {/*                              </button>*/}
                                {/*                          </div>*/}
                                {/*                          <div className="d-flex mt-5 mb-3">*/}
                                {/*                              <small className="mb-0 text-primary">Recent Transaction (3)</small>*/}
                                {/*                          </div>*/}
                                {/*                          <div className="d-flex justify-content-between border-bottom py-2">*/}
                                {/*                              <p className="text-black">Received Bitcoin</p>*/}
                                {/*                              <p className="text-gray">+0.00005462 BTC</p>*/}
                                {/*                          </div>*/}
                                {/*                          <div className="d-flex justify-content-between border-bottom py-2">*/}
                                {/*                              <p className="text-black">Sent Bitcoin</p>*/}
                                {/*                              <p className="text-gray">-0.00001446 BTC</p>*/}
                                {/*                          </div>*/}
                                {/*                          <div className="d-flex justify-content-between pt-2">*/}
                                {/*                              <p className="text-black">Sent Bitcoin</p>*/}
                                {/*                              <p className="text-gray">-0.00003573 BTC</p>*/}
                                {/*                          </div>*/}
                                {/*                      </div>*/}
                                {/*                  </div>*/}
                                {/*              </div>*/}
                                {/*         */}
                                {/*              <div className="col-md-4 equel-grid">*/}
                                {/*                  <div className="grid">*/}
                                {/*                      <div className="grid-body">*/}
                                {/*                          <div className="split-header">*/}
                                {/*                              <p className="card-title">Activity Log</p>*/}
                                {/*                              <div className="btn-group">*/}
                                {/*                                  <button type="button"*/}
                                {/*                                          className="btn btn-trasnparent action-btn btn-xs component-flat pr-0"*/}
                                {/*                                          data-toggle="dropdown" aria-haspopup="true"*/}
                                {/*                                          aria-expanded="false">*/}
                                {/*                                      <i className="mdi mdi-dots-vertical"></i>*/}
                                {/*                                  </button>*/}
                                {/*                                  <div className="dropdown-menu dropdown-menu-right">*/}
                                {/*                                      <a className="dropdown-item" href="#">Expand View</a>*/}
                                {/*                                      <a className="dropdown-item" href="#">Edit</a>*/}
                                {/*                                  </div>*/}
                                {/*                              </div>*/}
                                {/*                          </div>*/}
                                {/*                          <div className="vertical-timeline-wrapper">*/}
                                {/*                              <div className="timeline-vertical dashboard-timeline">*/}
                                {/*                                  <div className="activity-log">*/}
                                {/*                                      <p className="log-name">Agnes Holt</p>*/}
                                {/*                                      <div className="log-details">Analytics dashboard has been*/}
                                {/*                                          created<span className="text-primary ml-1">#Slack</span>*/}
                                {/*                                      </div>*/}
                                {/*                                      <small className="log-time">8 mins Ago</small>*/}
                                {/*                                  </div>*/}
                                {/*                                  <div className="activity-log">*/}
                                {/*                                      <p className="log-name">Ronald Edwards</p>*/}
                                {/*                                      <div className="log-details">Report has been updated <div*/}
                                {/*                                          className="grouped-images mt-2">*/}
                                {/*                                          <img className="img-sm"*/}
                                {/*                                               src="../assets/images/profile/male/image_4.png"*/}
                                {/*                                               alt="Profile Image" data-toggle="tooltip"*/}
                                {/*                                               title="Gerald Pierce"/>*/}
                                {/*                                          <img className="img-sm"*/}
                                {/*                                               src="../assets/images/profile/male/image_5.png"*/}
                                {/*                                               alt="Profile Image" data-toggle="tooltip"*/}
                                {/*                                               title="Edward Wilson"/>*/}
                                {/*                                          <img className="img-sm"*/}
                                {/*                                               src="../assets/images/profile/female/image_6.png"*/}
                                {/*                                               alt="Profile Image" data-toggle="tooltip"*/}
                                {/*                                               title="Billy Williams"/>*/}
                                {/*                                          <img className="img-sm"*/}
                                {/*                                               src="../assets/images/profile/male/image_6.png"*/}
                                {/*                                               alt="Profile Image"*/}
                                {/*                                               data-toggle="tooltip"*/}
                                {/*                                               title="Lelia Hampton"/>*/}
                                {/*                                          <span*/}
                                {/*                                              className="plus-text img-sm">+3</span>*/}
                                {/*                                      </div>*/}
                                {/*                                      </div>*/}
                                {/*                                      <small className="log-time">3 Hours Ago</small>*/}
                                {/*                                  </div>*/}
                                {/*                                  <div className="activity-log">*/}
                                {/*                                      <p className="log-name">Charlie Newton</p>*/}
                                {/*                                      <div className="log-details"> Approved your request <div*/}
                                {/*                                          className="wrapper mt-2">*/}
                                {/*                                          <button type="button"*/}
                                {/*                                                  className="btn btn-xs btn-primary">Approve*/}
                                {/*                                          </button>*/}
                                {/*                                          <button type="button"*/}
                                {/*                                                  className="btn btn-xs btn-inverse-primary">Reject*/}
                                {/*                                          </button>*/}
                                {/*                                      </div>*/}
                                {/*                                      </div>*/}
                                {/*                                      <small className="log-time">2 Hours Ago</small>*/}
                                {/*                                  </div>*/}
                                {/*                                  <div className="activity-log">*/}
                                {/*                                      <p className="log-name">Gussie Page</p>*/}
                                {/*                                      <div className="log-details">Added new task: Slack home*/}
                                {/*                                          page*/}
                                {/*                                      </div>*/}
                                {/*                                      <small className="log-time">4 Hours Ago</small>*/}
                                {/*                                  </div>*/}
                                {/*                                  <div className="activity-log">*/}
                                {/*                                      <p className="log-name">Ina Mendoza</p>*/}
                                {/*                                      <div className="log-details">Added new images</div>*/}
                                {/*                                      <small className="log-time">8 Hours Ago</small>*/}
                                {/*                                  </div>*/}
                                {/*                              </div>*/}
                                {/*                          </div>*/}
                                {/*                      </div>*/}
                                {/*                      <a className="border-top px-3 py-2 d-block text-gray" href="#">*/}
                                {/*                          <small className="font-weight-medium"><i*/}
                                {/*                              className="mdi mdi-chevron-down mr-2"></i> View All </small>*/}
                                {/*                      </a>*/}
                                {/*                  </div>*/}
                                {/*              </div>*/}
                                {/*          </div>*/}
                                {/*      </div>*/}
                            </div>

                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}

export default Dashboard;
