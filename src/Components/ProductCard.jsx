/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import i18next, { t } from 'i18next';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../Contexts/MainContext';

export default function ProductCard({ incomingProduct }) {
  const { myCart, setMyCart, popup, setPopup } = useContext(CartContext);
  const updateCart = (product) => {
    if (!myCart) {
      setMyCart(product);
    } else if (myCart === product) {
      setPopup({
        ...popup,
        isVisible: true,
        text: t('errors.already-in-cart'),
      });
    } else {
      setPopup({ ...popup, isVisible: true, text: t('errors.max-cart-one') });
    }
  };

  return (
    <div
      className="w-full fade-in group hover:bg-zinc-50 xl:max-w-lg lg:max-w-lg max-w-xs
      grid grid-cols-1 gap-4 transition-all duration-200 shadow-xl hover:border-zinc-200
    bg-white rounded-xl overflow-hidden border border-zinc-100 place-content-start place-items-start p-0"
    >
      <Link
        className="overflow-hidden w-full h-full border-b border-b-zinc-200"
        to={`/products/${incomingProduct.productSlug}`}
      >
        {incomingProduct.productImage ? (
          <img
            className="w-full object-cover h-[15rem]"
            src={incomingProduct.productImage}
            alt={incomingProduct.productTitle[i18next.language]}
          />
        ) : (
          <div className="w-full h-[15rem] grid grid-cols-1 place-content-center place-items-center">
            <div className="w-16 h-16 rounded-full bg-brand-red/30" />
          </div>
        )}
      </Link>

      <div className="w-full grid grid-cols-1 place-content-start place-items-start p-5 pt-0 gap-2">
        <h1 className="xl:text-xl w-full max-w-[14rem] whitespace-nowrap overflow-hidden lg:text-xl text-lg text-left text-gray-400 font-semibold">
          {incomingProduct.productTitle[i18next.language]}
        </h1>
        <div className="w-full pt-0 flex flex-wrap justify-start content-center gap-5">
          <button
            type="button"
            onClick={() => updateCart(incomingProduct)}
            className="p-2 text-sm focus:ring-2 ring-brand-red/30 active:scale-90 font-semibold transition-all duration-200 rounded-lg w-full max-w-[7rem] border border-brand-red/50 text-white bg-brand-red hover:brightness-90"
          >
            {t('buttons.add-to-cart')}
          </button>
          <Link
            className="self-center text-brand-red hover:underline text-xs"
            to={`/products/${incomingProduct.productSlug}`}
          >
            {t('buttons.see-details')}
          </Link>
        </div>
      </div>
    </div>
  );
}
