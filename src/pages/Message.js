import { MessageTemplate } from "./../components/templates";

export const Message = (props) => (
  <MessageTemplate type={props.type} onClick={props.onClick}></MessageTemplate>
);
