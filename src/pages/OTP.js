import { Component } from "react";
import { MessageTypes } from "../shared/enums";
import { OTPTemplate } from "../components/templates";
import { Message } from "../pages";

const Joi = require("joi");

export class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = { otp: "", errors: {} };
  }

  randomNumber = Math.floor(100000 + Math.random() * 900000);

  schema = Joi.object({
    otp: Joi.number().required(),
  });

  render() {
    return (
      <OTPTemplate
        value={this.state.otp}
        otpNumber={this.randomNumber}
        onChange={this.handleChange}
        error={this.state.errors.otp}
        onSubmit={this.handleSubmit}
      ></OTPTemplate>
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
    const messageType =
      +this.state.otp.trim() === this.randomNumber
        ? MessageTypes.Success
        : MessageTypes.Fail;
    this.onVerifyOTP(messageType);
  };

  onVerifyOTP = (messageType) => {
    // clone
    const state = { ...this.state };
    // edit
    const messagePage = <Message type={messageType}></Message>;
    state.modalContent = messagePage;
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
    if (!res.error && this.state.otp.length === 6) {
      this.setState({ errors: {} });
      return null;
    }

    errors.otp = "Must be a six digits";

    // set State
    this.setState({ errors });
    return errors;
  };
}
