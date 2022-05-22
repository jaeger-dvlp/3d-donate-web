import i18next, { t } from 'i18next';
import React, { useContext, useEffect, useState } from 'react';

import { BsCheckLg, BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import MainContext from '../Contexts/MainContext';

export default function MyCart() {
  const { myCart, setMyCart } = useContext(MainContext);
  const [cartProducts, setCartProducts] = useState(null);
  useEffect(() => {
    if (myCart) {
      setCartProducts(
        <div className="mt-5 w-full flex flex-wrap gap-5 justify-start content-center">
          <img
            className="xl:w-20 xl:h-20 lg:w-20 lg:h-20 w-full h-[14rem] object-cover border-2 rounded-xl shadow-xl self-center"
            alt={myCart.productSlug}
            src={myCart.productImage}
          />
          <div className="grid grid-cols-1 place-content-center place-items-start">
            <h1 className="self-center text-zinc-600 font-medium text-md">
              {myCart.productTitle[i18next.language]}
            </h1>
            <Link
              className="self-center mt-1 text-brand-red hover:underline text-sm"
              to={`/products/${myCart.productSlug}`}
            >
              {t('buttons.see-details')}
            </Link>
          </div>
          <div className="w-full grid grid-cols-2 place-content-start place-items-start gap-3">
            <button
              className="w-full flex justify-center text-center transition-all duration-150 hover:bg-green-200 active:scale-90 bg-green-100 rounded-lg p-2 text-green-400"
              type="button"
            >
              <BsCheckLg className="self-center" />
            </button>
            <button
              className="w-full flex justify-center text-center transition-all duration-150 hover:bg-zinc-200 active:scale-90 bg-zinc-100 rounded-lg p-2 text-zinc-400"
              type="button"
              onClick={() => setMyCart(null)}
            >
              <BsTrashFill className="self-center" />
            </button>
          </div>
        </div>,
      );
    } else {
      setCartProducts(
        <p className="text-zinc-500 fade-in transition-all duration-300 mt-1 text-md">
          {t('labels.cart-empty')}
        </p>,
      );
    }
  }, [myCart]);

  return (
    <div className="w-full min-h-[70vh] font-pop xl:pt-36 gap-14 lg:pt-36 pt-28 p-5 grid grid-cols-1 place-content-start place-items-center">
      <div className="w-full max-w-[20rem] grid grid-cols-1 place-content-start place-items-center">
        <div className="w-full pb-5 gap-3 grid grid-cols-1 place-content-start place-items-start">
          <h1 className="text-2xl text-brand-red font-semibold">
            {t('header.cart')}
          </h1>
          {cartProducts}
        </div>
      </div>
    </div>
  );
}
