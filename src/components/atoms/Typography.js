import Typography from "@material-ui/core/Typography";

export const TypographyTag = ({ variant = "h3", ...props }) => (
  <Typography gutterBottom variant={variant} {...props}>
    {props.children}
  </Typography>
);
