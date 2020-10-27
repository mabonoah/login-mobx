import { ButtonTag, TypographyTag } from "../../atoms";
import "./Connect.scss";

export const Connect = ({ onClick }) => (
  <div className="connect-container">
    <TypographyTag className="connect-title" variant="h4">
      Connect
    </TypographyTag>
    <TypographyTag variant="subtitle2">Welcome to connect demo!</TypographyTag>
    <ButtonTag className="connect-btn" onClick={onClick}>
      Start
    </ButtonTag>
  </div>
);
