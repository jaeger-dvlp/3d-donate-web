/* eslint-disable react/no-unstable-nested-components */
import i18next, { t } from 'i18next';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Contexts/CartContext';
import Images from '../../Images';

export default function MiniProducts() {
  const { myCart, setMyCart } = useContext(CartContext);
  const [products, setProducts] = useState(null);
  const mockProducts = [
    {
      productTitle: {
        tr: 'Adaptif Kaşık Tut.',
        en: 'Adaptive Spoon H.',
      },
      productSlug: 'adaptive-spoon-holder',
      productImage: Images.MockProduct1,
    },
    {
      productTitle: {
        tr: 'Adaptif Kalem Tut.',
        en: 'Adaptive Pencil H.',
      },
      productSlug: 'adaptive-pencil-holder',
      productImage: Images.MockProduct2,
    },
    {
      productTitle: {
        tr: 'Adaptif Kapak',
        en: 'Adaptive Cover',
      },
      productSlug: 'adaptive-cover',
      productImage: Images.MockProduct3,
    },
  ];

  const updateCart = (product) => {
    if (!myCart) {
      setMyCart(product);
    }
  };

  useEffect(() => {
    setProducts(
      <div className="w-full font-pop place-content-start place-items-center xl:max-w-full lg:max-w-full max-w-lg grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {mockProducts.map((product) => (
          <div
            key={`homeProduct-${Math.floor(Math.random() * 9999)}-${Math.floor(
              Math.random() * 9999,
            )}`}
            className="w-full xl:max-w-lg lg:max-w-lg max-w-xs grid grid-cols-1 gap-4 transition-all duration-200 hover:shadow-lg hover:border-zinc-200 bg-white rounded-3xl shadow-md border border-zinc-100 place-content-start place-items-start p-5"
          >
            <Link
              className="rounded-2xl overflow-hidden"
              to={`/products/${product.productSlug}`}
            >
              <img
                className="w-full"
                src={product.productImage}
                alt={product.productTitle[i18next.language]}
              />
            </Link>

            <h1 className="xl:text-2xl lg:text-2xl text-lg text-left text-zinc-400 font-semibold">
              {product.productTitle[i18next.language]}
            </h1>
            <div className="w-full flex flex-wrap justify-start content-center gap-5">
              <button
                type="button"
                onClick={() => updateCart(product)}
                className="p-3 active:scale-75 font-semibold hover:bg-red-200 transition-all duration-200 rounded-lg w-full max-w-[8rem] bg-red-100 text-red-400"
              >
                {t('buttons.add-to-cart')}
              </button>
              <Link
                className="self-center text-red-400 hover:underline text-sm"
                to={`/products/${product.productSlug}`}
              >
                {t('buttons.see-details')}
              </Link>
            </div>
          </div>
        ))}
      </div>,
    );
  }, []);

  return (
    <div className="font-pop w-full grid grid-cols-1 p-5 py-16 place-content-start place-items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 place-content-start place-items-center">
        <div className="text-center w-full gap-16 grid grid-cols-1 place-content-start place-items-center">
          <h1 className="p-3 rounded-lg w-full max-w-[15rem] bg-red-100 text-red-400 font-bold text-xl">
            {t('pages.homepage.products.our-products')}
          </h1>
          {products}
        </div>
      </div>
    </div>
  );
}
