/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable operator-linebreak */
import i18next from 'i18next';
import React, { useState } from 'react';
import NoProducts from '../Components/PageComponents/NoProducts';
import ProductFilter from '../Components/PageComponents/ProductFilter';
import ProductCard from '../Components/ProductCard';
import MockProducts from '../MockContent/MockProduct';

export default function Products() {
  const [searchVal, setSearchVal] = useState({
    searchValue: null,
    searchCategory: { slug: 'all-products' },
  });

  const AllProducts = () => {
    if (searchVal.searchValue) {
      if (searchVal.searchCategory.slug === 'all-products') {
        if (
          MockProducts.filter(({ title }) =>
            title[i18next.language]
              .toLowerCase()
              .includes(searchVal.searchValue.toLowerCase()),
          ).length > 0
        ) {
          return MockProducts.map((product) => {
            if (
              product.title[i18next.language]
                .toLowerCase()
                .includes(searchVal.searchValue.toLowerCase())
            ) {
              return <ProductCard incomingProduct={product} />;
            }
          });
        }
      } else if (searchVal.searchCategory !== 'all-products') {
        if (
          MockProducts.filter(({ title }) =>
            title[i18next.language]
              .toLowerCase()
              .includes(searchVal.searchValue.toLowerCase()),
          ).length > 0
        ) {
          return MockProducts.map((product) => {
            if (
              product.title[i18next.language]
                .toLowerCase()
                .includes(searchVal.searchValue.toLowerCase()) &&
              product.categories.find(
                ({ slug }) => slug === searchVal.searchCategory.slug,
              )
            ) {
              return <ProductCard incomingProduct={product} />;
            }
          });
        }
      }
      return <NoProducts />;
    }
    return MockProducts.map((product) => {
      return <ProductCard incomingProduct={product} />;
    });
  };

  return (
    <div className="w-full font-pop xl:pt-36 gap-14 lg:pt-36 pt-28 p-5 grid grid-cols-1 place-content-start place-items-center">
      <ProductFilter props={{ searchVal, setSearchVal }} />
      <div className="w-full max-w-7xl grid grid-cols-1 place-content-start place-items-center">
        <div className="w-full relative font-pop place-content-start place-items-center max-w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <AllProducts />
        </div>
      </div>
    </div>
  );
}
