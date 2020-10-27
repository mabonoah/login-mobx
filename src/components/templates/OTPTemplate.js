import { OTPForm } from "../organisms";

export const OTPTemplate = ({
  value,
  otpNumber,
  onChange,
  error,
  onSubmit,
}) => (
  <OTPForm
    value={value}
    otpNumber={otpNumber}
    onChange={onChange}
    error={error}
    onSubmit={onSubmit}
  ></OTPForm>
);
