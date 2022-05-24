import i18next, { t } from 'i18next';
import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { BiChevronRight } from 'react-icons/bi';
import { HiCubeTransparent } from 'react-icons/hi';

import MockProduct from '../MockContent/MockProduct';
import CartContext from '../Contexts/MainContext';
import Contents from '../Content';
import Images from '../Images';
import NotFound from './NotFound';

export default function ProductPage() {
  const [product, setProduct] = React.useState('loading');
  const { myCart, setMyCart, popup, setPopup } = useContext(CartContext);
  const params = useParams();
  const { pSlug } = params;

  useEffect(() => {
    setTimeout(() => {
      setProduct(MockProduct.find(({ slug }) => slug === pSlug) || null);
    }, 3000);
  }, []);

  const updateCart = () => {
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

  if (product === null) {
    return <NotFound />;
  }

  if (product === 'loading') {
    return (
      <div className="fixed fade-in w-screen h-screen z-[1] left-0 top-0 bg-white text-brand-red flex flex-wrap justify-center content-center p-0 m-0">
        <div className="rounded-full shadow-[0_0px_10px_#de00007c] ">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-50"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-100"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] fade-in-slow font-pop xl:pt-36 lg:pt-36 pt-28 w-full flex flex-wrap justify-center content-start p-0 m-0">
      <div className="w-full xl:max-w-6xl lg:max-w-6xl max-w-lg grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-start place-items-start p-5 gap-5">
        <div className="w-full col-span-full flex justify-start content-center gap-1">
          <Link
            className="text-brand-red self-center hover:underline font-semibold xl:text-sm lg:text-sm text-xs"
            to={Contents.header.homepage.links[i18next.language]}
          >
            {t('header.homepage')}
          </Link>
          <BiChevronRight className="text-zinc-400 self-center  text-lg" />
          <Link
            className="text-brand-red self-center hover:underline font-semibold xl:text-sm lg:text-sm text-xs"
            to={Contents.header.products.links[i18next.language]}
          >
            {t('header.products')}
          </Link>
          <BiChevronRight className="text-zinc-400 self-center text-lg" />
          <h2 className="text-zinc-500 self-center font-semibold xl:text-sm lg:text-sm text-xs">
            {product.title[i18next.language]}
          </h2>
        </div>
        <div className="w-full xl:max-w-lg lg:max-w-lg relative rounded-2xl shadow-xl border-4 border-zinc-200 overflow-hidden flex flex-wrap justify-center content-start">
          <button
            onClick={() => {
              setPopup({
                status: 'error',
                isVisible: true,
                text: t('errors.3d-not-available'),
              });
            }}
            className="w-10 active:scale-90 active:duration-100 h-10 flex group absolute xl:right-7 xl:top-7 lg:right-7 lg:top-7 right-5 top-5 border-brand-red border-2 transition-all duration-300 hover:bg-white hover:text-brand-red text-white flex-wrap
            justify-center content-center active:shadow-none bg-brand-red shadow-lg shadow-brand-red rounded-full"
            type="button"
          >
            <span className="bg-zinc-700 delay-200 -bottom-[20%] w-[5rem] text-center 3d-hint transition-all duration-200 absolute group-hover:opacity-100 group-hover:visible opacity-0 -translate-y-[-100%] group-hover:-translate-y-[-125%] py-1.5 px-1.5 text-[0.5rem] invisible text-white rounded-lg">
              <span className="w-2 h-2 bg-zinc-700 z-[1] absolute left-1/2 rotate-45 -translate-x-1/2 -translate-y-full" />
              <span className="w-full font-medium relative z-[2] h-full text-center">
                {t('hints.3d-viewer-button')}
              </span>
            </span>
            <HiCubeTransparent className="text-current self-center text-xl" />
          </button>

          <img
            src={product.image || Images.placeholder}
            className={`${
              product.image ? 'object-cover' : 'object-contain p-20'
            } w-full transition-all duration-200 object-center xl:h-[30rem] lg:h-[30rem] h-[20rem]`}
            alt={product.slug}
          />
        </div>
        <div className="w-full grid grid-cols-1 place-content-start place-items-start gap-5">
          <h1 className="text-brand-red xl:text-2xl lg:text-2xl text-xl font-semibold">
            {product.title[i18next.language]}
          </h1>
          <p className="text-zinc-400 whitespace-pre-wrap sm font-normal">
            {product.description[i18next.language]}
          </p>
          <button
            type="button"
            onClick={() => updateCart()}
            className="p-2 text-md focus:ring-2 ring-brand-red/30 active:scale-90 font-semibold transition-all duration-200 rounded-lg w-full max-w-[8rem] border border-brand-red/50 text-white bg-brand-red hover:brightness-90"
          >
            {t('buttons.add-to-cart')}
          </button>
        </div>
      </div>
    </div>
  );
}
