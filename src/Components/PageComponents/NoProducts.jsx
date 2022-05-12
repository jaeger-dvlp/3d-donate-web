import { t } from 'i18next';
import React from 'react';
import Images from '../../Images';

export default function NoProducts() {
  return (
    <div className="w-full fade-in col-span-full font-pop grid grid-cols-1 gap-3 place-content-center place-items-center p-5">
      <img
        src={Images.page404}
        alt="3D Donate 404"
        className="w-full max-w-xs"
      />
      <h1 className="text-brand-red text-center text-3xl font-bold">Oops.</h1>
      <p className="text-zinc-500 w-full max-w-lg text-md font-light text-center">
        {t('labels.no-product-found-search')}
      </p>
    </div>
  );
}
