import React, { useState } from "react";
import { StoreContext } from "./../shared/classes";
import { LoginTemplate } from "./../components/templates";
import { OTP } from "../pages";

const Joi = require("joi");

export const Login = () => {
  const store = React.useContext(StoreContext);

  const [email, setEmail] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const [errors, setErrors] = useState(() => {
    return {};
  });

  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string().required(),
  });

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) return;
    onSuccessLogin();
  };

  const onSuccessLogin = () => {
    store.changeModalContent(<OTP></OTP>);
  };

  const validate = () => {
    const errors = {};
    const state = { email: email, password: password };

    const res = schema.validate(state, { abortEarly: false });
    const isValidCredentials = validateCredentials();

    if (res.error) {
      for (const error of res.error.details) {
        errors[error.path] = renameErrorMessage(error.message);
      }
    } else if (!res.error && !isValidCredentials) {
      errors["invalidCredentials"] = "Invalid Email or Password";
    }
    setErrors({ ...errors });
    return errors;
  };

  const validateCredentials = () => {
    return (
      email.trim().toLowerCase() === "m.ali@gmail.com" &&
      password.trim() === "12345"
    );
  };

  const renameErrorMessage = (message) => {
    if (message.includes("empty")) return "Required";
    return "Invalid Email";
  };

  return (
    <LoginTemplate
      emailValue={email}
      emailError={errors.email}
      passwordValue={password}
      passwordError={errors.password}
      invalidCredentialsError={errors.invalidCredentials}
      onChangeEmail={handleEmailChange}
      onChangePassword={handlePasswordChange}
      onSubmit={handleSubmit}
    ></LoginTemplate>
  );
};
