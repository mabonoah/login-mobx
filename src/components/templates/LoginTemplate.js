import { LoginForm } from "../organisms";

export const LoginTemplate = ({
  emailValue,
  emailError,
  passwordValue,
  passwordError,
  invalidCredentialsError,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) => (
  <LoginForm
    emailValue={emailValue}
    emailError={emailError}
    passwordValue={passwordValue}
    passwordError={passwordError}
    invalidCredentialsError={invalidCredentialsError}
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onSubmit={onSubmit}
  ></LoginForm>
);
