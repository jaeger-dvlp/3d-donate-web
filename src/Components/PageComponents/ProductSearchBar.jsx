/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */

import React, { useRef, useEffect } from 'react';

export default function ProductSearchBar({ props }) {
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
    <div className="w-full max-w-7xl grid gird-cols-1 p-0 gap-5 place-content-start place-items-start">
      <div className="search-bar-container w-full gap-3 grid grid-cols-1 place-content-start place-items-start">
        <h1 className="text-xl text-zinc-500 font-semibold">
          Hangi ürünü arıyorsunuz?
        </h1>
        <p className="text-sm text-zinc-500">
          Aradığınız ürünü bulmakta zorluk mu çekiyorsunuz?
          <br />
          Aramaktan çekinmeyin!
        </p>
        <form
          ref={productSearch}
          className="border relative group focus-within:ring-2 ring-brand-red/30 !outline-none rounded-xl overflow-hidden xl:min-h-[3rem] lg:min-h-[3rem] min-h-[2rem]
          flex place-items-stretch justify-items-stretch border-brand-red "
        >
          <input
            className="w-full max-w-[15rem] text-zinc-500 placeholder-zinc-300 !outline-none p-2 px-3"
            type="text"
            placeholder="Adaptif kaşık tutucu..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            type="submit"
            className="w-20 bg-brand-red hover:brightness-90 active:brightness-75  text-white grid grid-cols-1 place-content-center place-items-center border-l border-l-brand-red"
          >
            Ara
          </button>
        </form>
      </div>
    </div>
  );
}
