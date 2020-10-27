import { ButtonTag, TypographyTag } from "../../atoms";
import { TextFieldTag } from "../../molecules";
import "./OTPForm.scss";

export const OTPForm = ({ value, otpNumber, onChange, error, onSubmit }) => (
  <form onSubmit={onSubmit} className="form">
    <TypographyTag className="form-title" variant="h4">
      Enter OTP
    </TypographyTag>
    <TextFieldTag
      name="otp"
      type="number"
      className="otp-field"
      value={value}
      placeholder={`${otpNumber}`}
      onChange={onChange}
      error={error ? true : false}
      errorMessage={error}
      label="OTP"
      variant="outlined"
    ></TextFieldTag>
    <ButtonTag className="otp-submit" type="submit">
      Verify
    </ButtonTag>
  </form>
);
