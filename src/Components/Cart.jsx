/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unneeded-ternary */
import i18next, { t } from 'i18next';
import React, { useContext, useEffect, useState } from 'react';

import { BsCart2, BsCheckLg, BsTrashFill } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import MainContext from '../Contexts/MainContext';

import Contents from '../Content';

export default function Cart() {
  const [cartActivity, setCartActivity] = useState(false);
  const [cartComponent, setCartComponent] = useState(null);
  const { myCart, setMyCart } = useContext(MainContext);

  useEffect(() => {
    if (myCart) {
      setCartActivity(true);
      localStorage.setItem('3d-donate-cart', JSON.stringify(myCart));
    } else {
      localStorage.setItem('3d-donate-cart', null);
    }

    setCartComponent(
      myCart ? (
        <div className="fade-in grid grid-cols-5 gap-x-5 gap-y-5">
          {myCart.image ? (
            <img
              className="col-span-2 object-cover w-16 h-16 rounded-xl border-brand-red/30 border"
              src={myCart.image}
              alt={myCart.title[i18next.language]}
            />
          ) : (
            <div className="w-16 h-16 col-span-2 rounded-xl border-brand-red/30 border grid grid-cols-1 place-content-center place-items-center">
              <div className="w-3 h-3 rounded-full bg-brand-red/30" />
            </div>
          )}

          <h2 className="w-full text-zinc-500 text-sm self-center col-span-3 text-left">
            {myCart.title[i18next.language]}
          </h2>
          <div className="col-span-full grid grid-cols-2 gap-x-3">
            <Link
              to={Contents.pages.checkout.links[i18next.language]}
              className="w-full flex justify-center  text-center transition-all duration-150 hover:bg-green-200 active:scale-90 bg-green-100 rounded-lg p-2 text-green-400"
            >
              <BsCheckLg className="self-center" />
            </Link>
            <button
              className="w-full flex justify-center text-center transition-all duration-150 hover:bg-zinc-200 active:scale-90 bg-zinc-100 rounded-lg p-2 text-zinc-400"
              type="button"
              onClick={() => setMyCart(null)}
            >
              <BsTrashFill className="self-center" />
            </button>
          </div>
        </div>
      ) : null,
    );
  }, [myCart]);

  return (
    <div className="fixed z-10 right-5 bottom-5">
      <div
        className={`absolute ${
          cartActivity
            ? 'scale-100 opacity-100 visible translate-y-0 translate-x-0'
            : 'scale-0 opacity-0 invisible translate-y-[70%] translate-x-16'
        } font-pop right-0 z-[19] p-5 py-4 grid grid-cols-1 place-content-start min-h-[14rem] w-full min-w-[14rem] place-items-start rounded-xl shadow-lg transition-all duration-300 bg-white xl:bottom-20 lg:bottom-20 bottom-16 border-2 border-brand-red/30 gap-5`}
      >
        <h1 className="p-3 bg-brand-red/10 rounded-xl w-full text-center  text-brand-red font-bold text-xl">
          {t('components.cart.title')}
        </h1>
        {myCart && cartComponent}
        <h1
          className={`${
            myCart
              ? 'opacity-0 -translate-y-[40%]'
              : 'opacity-100 -translate-y-[50%]'
          } absolute transition-all w-full text-center duration-200 font-normal text-md text-zinc-400 top-1/2 left-1/2  -translate-x-1/2`}
        >
          {t('labels.cart-empty')}
        </h1>
      </div>
      <button
        type="button"
        onClick={() => setCartActivity(cartActivity ? false : true)}
        className="p-3 z-10 overflow-hidden active:scale-90 xl:w-16 xl:h-16 lg:w-16 lg:h-16 flex flex-wrap justify-center content-center bg-white border-2 rounded-2xl border-brand-red/30 hover:bg-zinc-100 transition-all duration-200 shadow-lg text-brand-red fixed bottom-5 right-5"
      >
        <BsCart2
          className={`${
            cartActivity
              ? 'opacity-0 -translate-y-2'
              : 'opacity-100 translate-y-0'
          } transition-all duration-200 text-2xl text-brand-red`}
        />
        <IoIosClose
          className={`${
            cartActivity
              ? 'opacity-100 -translate-y-1/2'
              : 'opacity-0 translate-y-[-30%]'
          } transition-all duration-200 absolute text-5xl w-[70%] h-[70%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}
        />
      </button>
    </div>
  );
}
