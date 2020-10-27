import { ButtonTag, TypographyTag } from "../../atoms";
import { TextFieldTag, AlertEl } from "../../molecules";
import "./LoginForm.scss";

export const LoginForm = ({
  emailValue,
  emailError,
  passwordValue,
  passwordError,
  invalidCredentialsError,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="form">
    <TypographyTag className="form-title" variant="h4">
      Login
    </TypographyTag>
    {invalidCredentialsError && (
      <AlertEl severity="error">{invalidCredentialsError}</AlertEl>
    )}
    <TextFieldTag
      className="login-field"
      name="email"
      type="text"
      value={emailValue}
      onChange={onChangeEmail}
      error={invalidCredentialsError || emailError ? true : false}
      errorMessage={emailError}
      label="Email"
      variant="outlined"
      placeholder="m.ali@gmail.com"
    ></TextFieldTag>
    <TextFieldTag
      className="login-field"
      name="password"
      type="password"
      value={passwordValue}
      onChange={onChangePassword}
      error={invalidCredentialsError || passwordError ? true : false}
      errorMessage={passwordError}
      label="Password"
      variant="outlined"
      placeholder="12345"
    ></TextFieldTag>
    <ButtonTag className="submit-btn" type="submit">
      Log in
    </ButtonTag>
  </form>
);
