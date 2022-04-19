/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */

import React, { useRef, useEffect } from 'react';

import { GoSearch } from 'react-icons/go';

export default function ProductFilter({ props }) {
  const productSearch = useRef();
  const { searchVal, setSearchVal } = props;
  useEffect(() => {
    const searchProduct = (e) => {
      e.preventDefault();
    };

    productSearch.current.addEventListener('submit', searchProduct);

    return () =>
      productSearch.current.removeEventListener('submit', searchProduct);
  }, [searchVal]);
  return (
    <div className="w-full max-w-7xl grid grid-cols-1 p-0 gap-5 place-content-start place-items-start">
      <div className="search-bar-container w-full gap-3 grid grid-cols-1 place-content-start place-items-start">
        <h1 className="text-2xl text-brand-red font-semibold">
          Hangi ürünü arıyorsunuz?
        </h1>
        <p className="text-sm pb-2 text-zinc-500">
          Aradığınız ürünü bulmakta zorluk mu çekiyorsunuz?
          <br />
          Aramaktan çekinmeyin!
        </p>

        <div className="w-full p-0 grid grid-cols-6 rounded-xl bg-brand-red/5 border border-brand-red/20 overflow-hidden">
          <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-full xl:p-5 lg:p-5 p-3 xl:border-r lg:border-r md:border-r xl:border-b-0 lg:border-b-0 md:border-b-0 border-b border-brand-red/20" />
          <div className="xl:col-span-5 lg:col-span-5 md:col-span-4 col-span-full xl:p-5 lg:p-5 p-3 bg-white">
            <form
              ref={productSearch}
              className="w-full xl:gap-5 lg:gap-5 md:gap-4 gap-1 !outline-none flex place-items-stretch justify-items-stretch border-brand-red "
            >
              <input
                className="w-full border-b border-b-brand-red/10 text-zinc-500 bg-white placeholder-zinc-300 !outline-none p-2 px-3"
                type="text"
                placeholder="Adaptif kaşık tutucu..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <button
                type="submit"
                className="p-2 text-center flex justify-center text-md focus:ring-2 ring-brand-red/30 active:scale-90 font-semibold transition-all duration-200 rounded-lg min-w-[3rem] border border-brand-red/50 text-white bg-brand-red hover:brightness-90"
              >
                <GoSearch className="self-center text-xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
