import i18next, { t } from 'i18next';
import React from 'react';
import Contents from '../Content';
import Images from '../Images';

export default function NotFound() {
  return (
    <div className="w-full font-pop min-h-screen grid grid-cols-1 gap-3 place-content-center place-items-center p-5">
      <img
        src={Images.page404}
        alt="3D Donate 404"
        className="w-full max-w-xs"
      />
      <h1 className="text-brand-red text-center text-3xl font-bold">Oops.</h1>
      <p className="text-zinc-500 w-full max-w-lg text-md font-light text-center">
        {t('pages.not-found.description')}
      </p>
      <a
        className="text-brand-red underline"
        href={Contents.header.homepage.links[i18next.language]}
      >
        {t('buttons.to-home')}
      </a>
    </div>
  );
}
