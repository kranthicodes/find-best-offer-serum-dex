import React from "react";

export const BestOfferContext = React.createContext(null);

export const useBestOfferContext = () => {
  const context = React.useContext(BestOfferContext);

  if (!context) {
    throw new Error("useBestOfferContext must only be used within its Provider");
  }

  return context;
};
