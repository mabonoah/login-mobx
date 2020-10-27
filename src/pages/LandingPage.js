import React, { Component } from "react";
import { DynamicModal } from "../components/organisms";
import { LandingPageTemplate } from "../components/templates";
import { Login, OTP, Message } from "./../pages";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, modalContent: null };
  }

  render() {
    return (
      <React.Fragment>
        <LandingPageTemplate
          onClick={this.handleStartClick}
        ></LandingPageTemplate>
        <DynamicModal open={this.state.modalIsOpen}>
          {this.state.modalContent}
        </DynamicModal>
      </React.Fragment>
    );
  }

  handleStartClick = () => {
    // clone
    const state = { ...this.state };
    // edit
    const loginPage = <Login onSuccessLogin={this.handleSuccessLogin}></Login>;
    state.modalIsOpen = true;
    state.modalContent = loginPage;
    // set state
    this.setState(state);
  };

  handleSuccessLogin = () => {
    // clone
    const state = { ...this.state };
    // edit
    const otpPage = <OTP onVerifyOTP={this.handleVerifyOTP}></OTP>;
    state.modalContent = otpPage;
    // set state
    this.setState(state);
  };

  handleVerifyOTP = (messageType) => {
    // clone
    const state = { ...this.state };
    // edit
    const messagePage = (
      <Message type={messageType} onClick={this.handleMessageClick}></Message>
    );
    state.modalContent = messagePage;
    // set state
    this.setState(state);
  };

  handleMessageClick = () => {
    // clone
    const state = { ...this.state };
    // edit
    state.modalIsOpen = false;
    // set state
    this.setState(state);
  };
}
