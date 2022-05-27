/* eslint-disable react/no-unstable-nested-components */
import i18next, { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contents from '../../Content';
import MockProducts from '../../MockContent/MockProduct';
import ProductCard from '../ProductCard';

export default function MiniProducts() {
  const [products, setProducts] = useState(null);
  const mockProducts = [
    MockProducts.find(({ slug }) => slug === 'painting-apparatus'),
    MockProducts.find(({ slug }) => slug === 'wheeled-systems'),
    MockProducts.find(({ slug }) => slug === 'bird-house'),
  ];

  useEffect(() => {
    setProducts(
      <div className="w-full relative font-pop place-content-start place-items-center xl:max-w-full lg:max-w-full max-w-lg grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {mockProducts.map((product) => (
          <ProductCard
            key={`product-${Math.floor(Math.random() * 9999)}-${Math.floor(
              Math.random() * 9999,
            )}`}
            incomingProduct={product}
          />
        ))}
      </div>,
    );
  }, []);

  return (
    <div className="font-pop w-full grid grid-cols-1 p-5 py-16 place-content-start place-items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 place-content-start place-items-center">
        <div className="text-center w-full max-w-4xl gap-16 gap-x-0 grid grid-cols-1 place-content-start place-items-center">
          <h1 className="p-3 rounded-lg w-full max-w-[15rem] bg-brand-red/10 text-brand-red font-bold text-xl">
            {t('pages.homepage.products.our-products')}
          </h1>
          {products}
          <Link
            to={Contents.header.products.links[i18next.language]}
            className="p-2 active:scale-90 flex mt-3 justify-center gap-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-brand-red/20 bg-brand-red/10 text-brand-red"
          >
            {t('buttons.see-all')}
          </Link>
        </div>
      </div>
    </div>
  );
}
