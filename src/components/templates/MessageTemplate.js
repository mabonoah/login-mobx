import { MessageOrganism } from "../organisms";

export const MessageTemplate = ({ type, onClick }) => (
  <MessageOrganism type={type} onClick={onClick}></MessageOrganism>
);
