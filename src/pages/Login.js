import React, { Component } from "react";
import { LoginTemplate } from "./../components/templates";
import { OTP } from "../pages";

const Joi = require("joi");

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errors: {} };
  }

  schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string().required(),
  });

  render() {
    return (
      <LoginTemplate
        emailValue={this.state.email}
        emailError={this.state.errors.email}
        passwordValue={this.state.password}
        passwordError={this.state.errors.password}
        invalidCredentialsError={this.state.errors.invalidCredentials}
        onChangeEmail={this.handleChange}
        onChangePassword={this.handleChange}
        onSubmit={this.handleSubmit}
      ></LoginTemplate>
    );
  }

  handleChange = (e) => {
    // clone
    const state = { ...this.state };
    // edit
    state[e.currentTarget.name] = e.currentTarget.value;
    // set State
    this.setState(state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) return;
    this.onSuccessLogin();
  };

  onSuccessLogin = () => {
    // clone
    const state = { ...this.state };
    // edit
    const otpPage = <OTP onVerifyOTP={this.handleVerifyOTP}></OTP>;
    state.modalContent = otpPage;
    // set state
    this.setState(state);
  };

  validate = () => {
    const errors = {};
    // clone
    const state = { ...this.state };

    // edit
    delete state.errors;
    const res = this.schema.validate(state, { abortEarly: false });
    const isValidCredentials = this.validateCredentials();
    if (!res.error && isValidCredentials) {
      this.setState({ errors: {} });
      return null;
    } else if (!res.error && !isValidCredentials) {
      errors["invalidCredentials"] = "Invalid Email or Password";
    } else {
      for (const error of res.error.details) {
        errors[error.path] = this.renameErrorMessage(error.message);
      }
    }

    // set State
    this.setState({ errors });
    return errors;
  };

  validateCredentials = () => {
    return (
      this.state.email.trim().toLowerCase() === "m.ali@gmail.com" &&
      this.state.password.trim() === "12345"
    );
  };

  renameErrorMessage = (message) => {
    if (message.includes("empty")) return "Required";
    return "Invalid Email";
  };
}
