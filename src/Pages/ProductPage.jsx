/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
import i18next, { t } from 'i18next';
import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { BiChevronRight } from 'react-icons/bi';
import { HiCubeTransparent } from 'react-icons/hi';

import MockProduct from '../MockContent/MockProduct';
import CartContext from '../Contexts/MainContext';
import Contents from '../Content';
import Images from '../Images';

export default function ProductPage() {
  const [product, setProduct] = React.useState('loading');
  const { setPopup } = useContext(CartContext);
  const params = useParams();
  const { pSlug } = params;

  useEffect(() => {
    setProduct(
      MockProduct.find(({ productSlug }) => productSlug === pSlug) || null,
    );
  }, []);

  if (product === null) {
    return <div className="py-36">Product Not Found</div>;
  }

  if (product === 'loading') {
    return <div className="py-36">Loading...</div>;
  }

  return (
    <div className="min-h-[70vh] font-pop xl:pt-36 lg:pt-36 pt-28 w-full flex flex-wrap justify-center content-start p-0 m-0">
      <div className="w-full xl:max-w-7xl lg:max-w-7xl max-w-lg grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-start place-items-start p-5 gap-5">
        <div className="w-full col-span-full flex justify-start content-center gap-1">
          <Link
            className="text-brand-red self-center hover:underline font-semibold xl:text-sm lg:text-sm md:text-xs text-[0.1rem]"
            to={Contents.header.homepage.links[i18next.language]}
          >
            {t('header.homepage')}
          </Link>
          <BiChevronRight className="text-zinc-400 self-center  text-lg" />
          <Link
            className="text-brand-red self-center hover:underline font-semibold xl:text-sm lg:text-sm md:text-xs text-[0.1rem]"
            to={Contents.header.products.links[i18next.language]}
          >
            {t('header.products')}
          </Link>
          <BiChevronRight className="text-zinc-400 self-center text-lg" />
          <h2 className="text-zinc-500 self-center font-semibold xl:text-sm lg:text-sm md:text-xs text-[0.1rem]">
            {product.productTitle[i18next.language]}
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
            src={product.productImage || Images.placeholder}
            className={`${
              product.productImage ? 'object-cover' : 'object-contain p-20'
            } w-full transition-all duration-200 object-center h-full xl:max-h-[30rem] lg:max-h-[30rem] max-h-[20rem]`}
            alt={product.productSlug}
          />
        </div>
      </div>
    </div>
  );
}
