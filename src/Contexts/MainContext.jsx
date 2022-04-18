/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState } from 'react';

const MainContext = createContext();

export function MainContextProvider({ children }) {
  const [myCart, setMyCart] = useState(
    localStorage.getItem('3d-donate-cart') &&
      (localStorage.getItem('3d-donate-cart') !== 'null'
        ? JSON.parse(localStorage.getItem('3d-donate-cart'))
        : null),
  );
  const [popup, setPopup] = useState({
    isVisible: false,
    status: 'error',
    text: '',
  });

  const value = useMemo(() => ({
    myCart,
    setMyCart,
    popup,
    setPopup,
  }));

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default MainContext;
