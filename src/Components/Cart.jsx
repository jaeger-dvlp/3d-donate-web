/* eslint-disable no-unneeded-ternary */
import { t } from 'i18next';
import React, { useState } from 'react';

import { BsCart2 } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';

export default function Cart() {
  const [cartActivity, setCartActivity] = useState(false);

  return (
    <div className="fixed right-5 bottom-5">
      <div
        className={`absolute ${
          cartActivity
            ? 'scale-100 opacity-100 visible translate-y-0 translate-x-0'
            : 'scale-0 opacity-0 invisible translate-y-[70%] translate-x-16'
        } font-pop right-0 z-[19] p-5 py-4 grid grid-cols-1 place-content-start min-h-[15rem] w-full min-w-[14rem] place-items-start rounded-xl shadow-lg transition-all duration-300 bg-white xl:bottom-20 lg:bottom-20 bottom-16 border-2 border-red-400 gap-10`}
      >
        <h1 className="p-3 bg-red-100 rounded-xl w-full text-center  text-red-400 font-bold text-xl">
          {t('components.cart.title')}
        </h1>
      </div>
      <button
        type="button"
        onClick={() => setCartActivity(cartActivity ? false : true)}
        className="p-3 overflow-hidden active:scale-50 xl:w-16 xl:h-16 lg:w-16 lg:h-16 flex flex-wrap justify-center content-center z-[20] bg-white border-2 rounded-2xl border-red-400 hover:bg-red-100 transition-all duration-200 shadow-lg text-red-400 fixed bottom-5 right-5"
      >
        <BsCart2
          className={`${
            cartActivity
              ? 'opacity-0 -translate-y-1'
              : 'opacity-100 translate-y-0'
          } transition-all duration-200 text-2xl text-red-400`}
        />
        <IoIosClose
          className={`${
            cartActivity
              ? 'opacity-100 -translate-y-1/2'
              : 'opacity-0 translate-y-1'
          } transition-all duration-200 absolute text-5xl w-[70%] h-[70%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}
        />
      </button>
    </div>
  );
}
