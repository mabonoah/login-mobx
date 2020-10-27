import * as React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import { TypographyTag } from "../atoms";

export const TextFieldTag = ({
  label,
  value,
  onChange,
  error,
  errorMessage,
  ...props
}) => {
  const matches = useMediaQuery("(min-width:767.98px)");

  return (
    <React.Fragment>
      <TextField
        size={matches ? "medium" : "small"}
        label={label}
        value={value}
        error={error}
        onChange={onChange}
        {...props}
      />
      <TypographyTag style={{ color: "#f44336" }} variant="body1">
        {errorMessage}
      </TypographyTag>
    </React.Fragment>
  );
};
