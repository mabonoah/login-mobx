import React from "react";
import { DynamicModal } from "../components/organisms";
import { LandingPageTemplate } from "../components/templates";
import { Message } from "./../pages";
import { StoreContext } from "./../shared/classes";
import { Observer } from "mobx-react";

export const LandingPage = () => {
  const store = React.useContext(StoreContext);

  const handleStartClick = () => {
    store.changeModalContent(<Message></Message>);
    store.openModal();
  };

  return (
    <React.Fragment>
      <LandingPageTemplate onClick={handleStartClick}></LandingPageTemplate>
      <Observer>
        {() => (
          <DynamicModal open={store.modalIsOpen}>
            {store.modalContent}
          </DynamicModal>
        )}
      </Observer>
    </React.Fragment>
  );
};
