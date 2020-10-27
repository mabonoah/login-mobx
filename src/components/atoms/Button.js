import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

export const ButtonTag = ({
  variant = "contained",
  color = "primary",
  onClick,
  ...props
}) => {
  const matches = useMediaQuery("(min-width:767.98px)");

  return (
    <Button
      size={matches ? "medium" : "small"}
      variant={variant}
      color={color}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </Button>
  );
};
