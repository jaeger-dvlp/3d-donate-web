/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [myCart, setMyCart] = useState(null);

  const value = useMemo(() => ({ myCart, setMyCart }));

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
