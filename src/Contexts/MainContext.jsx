/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState } from 'react';

const MainContext = createContext();

export function MainContextProvider({ children }) {
  const [myCart, setMyCart] = useState(null);

  const value = useMemo(() => ({ myCart, setMyCart }));

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default MainContext;
