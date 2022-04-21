/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */

import React, { useRef, useEffect, useState } from 'react';
import i18next, { t } from 'i18next';
import { GoSearch } from 'react-icons/go';
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function ProductFilter({ props }) {
  const productSearch = useRef();
  const mockCategories = [
    {
      tr: 'Tüm Ürünler',
      en: 'All Products',
      slug: 'all',
    },
    {
      tr: 'El ürünleri',
      en: 'Hand products',
      slug: 'hand-products',
    },
    {
      tr: 'Ayak ürünleri',
      en: 'Foot products',
      slug: 'foot-products',
    },
  ];
  const [selectedProductCategory, setSelectedProductCategory] = useState(
    mockCategories[0],
  );

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
          {t('pages.products.header')}
        </h1>
        <p className="text-sm pb-2 whitespace-pre-wrap text-zinc-500">
          {t('pages.products.description')}
        </p>

        <div className="w-full p-0 grid grid-cols-6 rounded-xl bg-brand-red/5 border border-brand-red/20">
          <div className="grid grid-cols-1 place-content-center place-items-center xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-full p-3 xl:border-r lg:border-r md:border-r xl:border-b-0 lg:border-b-0 md:border-b-0 border-b border-brand-red/20">
            <div
              tabIndex={0}
              className="relative category-selector cursor-pointer !outline-none text-center w-full group p-3 bg-brand-red/20 hover:bg-brand-red/30 focus-within:bg-brand-red/30 transition-colors  duration-200 font-semibold focus:ring-2 ring-brand-red/50 text-brand-red rounded-lg"
            >
              {selectedProductCategory[i18next.language]}
              {mockCategories.length > 1 && (
                <span className="absolute group-focus-within:rotate-180 transition-all duration-200 right-2 top-1/2 -translate-y-1/2 text-3xl p-0 m-0">
                  <RiArrowDropDownLine />
                </span>
              )}
              <div
                className="absolute cursor-default scale-y-90 group-focus-within:scale-y-100 grid gap-3 grid-cols-1 place-content-start place-items-center bg-transparent p-0 m-0 transition-all duration-300 top-full
              group-focus-within:top-[calc(0.75rem_+_100%)] group-focus-within:opacity-100 group-focus-within:visible invisible opacity-0 left-0 w-full "
              >
                {mockCategories.map(
                  (category) =>
                    category.slug !== selectedProductCategory.slug && (
                      <button
                        key={`categoryButton${category.slug}`}
                        type="button"
                        onClick={() => {
                          document.querySelector('.category-selector').blur();
                          setSelectedProductCategory(category);
                        }}
                        className=" bg-white !outline-none overflow-hidden grid grid-cols-1 place-content-center place-items-center focus:ring-2 ring-brand-red/50 rounded-lg w-full p-0 h-full text-brand-red font-semibold"
                      >
                        <span className="w-full text-center  left-0 top-0 h-full bg-brand-red/20 hover:bg-brand-red/30 transition-colors p-3">
                          {category[i18next.language]}
                        </span>
                      </button>
                    ),
                )}
              </div>
            </div>
          </div>
          <div className="xl:col-span-5 lg:col-span-5 md:col-span-4 col-span-full xl:p-5 lg:p-5 p-3 bg-white rounded-xl">
            <form
              ref={productSearch}
              className="w-full xl:gap-5 lg:gap-5 md:gap-4 gap-1 !outline-none flex place-items-stretch justify-items-stretch border-brand-red "
            >
              <input
                className="w-full border-b border-b-brand-red/10 text-zinc-500 bg-white placeholder-zinc-300 !outline-none p-2 px-3"
                type="text"
                placeholder={t('pages.products.filter-placeholder')}
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
