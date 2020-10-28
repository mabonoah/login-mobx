import { ButtonTag, TypographyTag } from "../../atoms";
import "./Connect.scss";

export const Connect = ({ onClick }) => (
  <div className="connect-container">
    <TypographyTag className="connect-title" variant="h4">
      Login
    </TypographyTag>
    <TypographyTag variant="subtitle2">Welcome to login demo!</TypographyTag>
    <ButtonTag className="connect-btn" onClick={onClick}>
      Start
    </ButtonTag>
  </div>
);
