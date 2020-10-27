import Alert from "@material-ui/lab/Alert";

export const AlertEl = ({ severity, ...props }) => (
  <Alert severity={severity} {...props}>
    {props.children}
  </Alert>
);
