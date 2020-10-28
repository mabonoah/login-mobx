import React, { useState } from "react";
import { MessageTypes } from "../shared/enums";
import { StoreContext } from "./../shared/classes";
import { OTPTemplate } from "../components/templates";
import { Message } from "../pages";

const Joi = require("joi");
const randomNumber = Math.floor(100000 + Math.random() * 900000);

export const OTP = () => {
  const store = React.useContext(StoreContext);

  const [otp, setOTP] = useState(() => "");
  const [error, setError] = useState(() => "");

  const schema = Joi.number().integer().required();

  const handleChange = (e) => {
    setOTP(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) return;
    const messageType =
      +otp.trim() === randomNumber ? MessageTypes.Success : MessageTypes.Fail;
    onVerifyOTP(messageType);
  };

  const onVerifyOTP = (messageType) => {
    const messagePage = <Message type={messageType}></Message>;
    store.changeModalContent(messagePage);
  };

  const validate = () => {
    let error = "";
    const res = schema.validate(otp);
    if (res.error || otp.length !== 6) {
      error = "Must be a six digits";
    }
    setError(error);
    return error;
  };

  return (
    <OTPTemplate
      value={otp}
      otpNumber={randomNumber}
      onChange={handleChange}
      error={error}
      onSubmit={handleSubmit}
    ></OTPTemplate>
  );
};
