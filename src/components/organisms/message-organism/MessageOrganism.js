import { MessageTypes } from "../../../enums";
import { MaterialIcon, ButtonTag, TypographyTag } from "../../atoms";
import "./MessageOrganism.scss";

export const MessageOrganism = ({ type = MessageTypes.Success, onClick }) => {
  const Colors = Object.freeze({
    Success: "#02bd9e",
    Fail: "#f1606f",
  });
  const successMessage = "Oh yeah. You were successful!";
  const failMessage = "Oh no. Something went wrong.";
  const successBtnStyle = {
    color: Colors.Success,
    borderColor: Colors.Success,
  };
  const failBtnStyle = { color: Colors.Fail, borderColor: Colors.Fail };

  return (
    <div className="message-container">
      <section
        className="message-section"
        style={{
          background:
            type === MessageTypes.Success ? Colors.Success : Colors.Fail,
        }}
      >
        <MaterialIcon className="icon">
          {type === MessageTypes.Success
            ? "sentiment_very_satisfied"
            : "sentiment_dissatisfied"}
        </MaterialIcon>
        <TypographyTag className="message-title" variant="h5">
          {type === MessageTypes.Success ? "Great!" : "OOPS!"}
        </TypographyTag>
      </section>
      <TypographyTag variant="subtitle1">
        {type === MessageTypes.Success ? successMessage : failMessage}
      </TypographyTag>
      <ButtonTag
        className="message-btn"
        variant="outlined"
        onClick={onClick}
        style={type === MessageTypes.Success ? successBtnStyle : failBtnStyle}
      >
        {type === MessageTypes.Success ? "Done" : "Retry"}
      </ButtonTag>
    </div>
  );
};
