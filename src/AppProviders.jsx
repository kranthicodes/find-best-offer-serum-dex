import React from 'react';
import { GlobalStyle } from './modules/common';

export default function AppProviders({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
