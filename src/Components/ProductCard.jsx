/* eslint-disable react/prop-types */
import i18next, { t } from 'i18next';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../Contexts/MainContext';

export default function ProductCard({ incomingProduct }) {
  const { myCart, setMyCart } = useContext(CartContext);
  const updateCart = (product) => {
    if (!myCart) {
      setMyCart(product);
    } else {
      // Activate popup etc.
    }
  };

  return (
    <div
      className="w-full group hover:bg-zinc-50 xl:max-w-lg lg:max-w-lg max-w-xs
      grid grid-cols-1 gap-4 transition-all duration-200 hover:shadow-lg hover:border-zinc-200
    bg-white rounded-3xl shadow-md border border-zinc-100 place-content-start place-items-start p-5"
    >
      <Link
        className="rounded-2xl border border-zinc/50 overflow-hidden"
        to={`/products/${incomingProduct.productSlug}`}
      >
        <img
          className="w-full group-hover:scale-110 transition-all duration-300"
          src={incomingProduct.productImage}
          alt={incomingProduct.productTitle[i18next.language]}
        />
      </Link>

      <h1 className="xl:text-2xl w-full max-w-[14rem] whitespace-nowrap overflow-hidden lg:text-2xl text-lg text-left text-zinc-400 font-semibold">
        {incomingProduct.productTitle[i18next.language]}
      </h1>
      <div className="w-full flex flex-wrap justify-start content-center gap-5">
        <button
          type="button"
          onClick={() => updateCart(incomingProduct)}
          className="p-3 focus:ring-2 ring-brand-red/30  active:scale-90 font-semibold hover:bg-brand-red/20 transition-all duration-200 rounded-lg w-full max-w-[8rem] border border-brand-red/50 bg-white text-brand-red"
        >
          {t('buttons.add-to-cart')}
        </button>
        <Link
          className="self-center text-brand-red hover:underline text-sm"
          to={`/products/${incomingProduct.productSlug}`}
        >
          {t('buttons.see-details')}
        </Link>
      </div>
    </div>
  );
}
