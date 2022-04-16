import i18next, { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';
import Contents from '../Content';
import Images from '../Images';

export default function Footer() {
  return (
    <div className="font-pop w-full mt-32 py-16 grid grid-cols-1 place-items-center place-content-start p-0 m-0 border-t-2 border-brand-red bg-brand-red/10">
      <div className="w-full max-w-md px-5 grid grid-cols-1 place-content-start place-items-center gap-7">
        <Link
          to={Contents.header.whatarewedoing.links[i18next.language]}
          className="hover:scale-110 transition-all duration-150"
        >
          <img
            src={Images.Logo}
            alt="3D Donate Logo"
            className="w-16 object-contain"
          />
        </Link>
        <div className="w-full xl:flex lg:flex grid grid-cols-1 place-content-start place-items-center justify-center content-center p-0 m-0 gap-4">
          <Link
            className="font-medium hover:underline text-sm text-brand-red"
            to={Contents.header.homepage.links[i18next.language]}
          >
            {t('header.homepage')}
          </Link>
          <Link
            className="font-medium hover:underline text-sm text-brand-red"
            to={Contents.header.products.links[i18next.language]}
          >
            {t('header.products')}
          </Link>
          <Link
            className="font-medium hover:underline text-sm text-brand-red"
            to={Contents.header.contact.links[i18next.language]}
          >
            {t('header.contact')}
          </Link>
          <Link
            className="font-medium hover:underline text-sm text-brand-red"
            to={Contents.header.whatarewedoing.links[i18next.language]}
          >
            {t('header.whatarewedoing')}
          </Link>
        </div>
        <span className="text-xs text-brand-red">
          Copyright © 2022 3D Donate
        </span>
      </div>
    </div>
  );
}
