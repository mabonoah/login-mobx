import React from "react";
import { MessageTemplate } from "./../components/templates";
import { StoreContext } from "./../shared/classes/store";

export const Message = (props) => {
  const store = React.useContext(StoreContext);

  const handleMessageClick = () => {
    store.closeModal();
  };

  return (
    <MessageTemplate
      type={props.type}
      onClick={handleMessageClick}
    ></MessageTemplate>
  );
};
