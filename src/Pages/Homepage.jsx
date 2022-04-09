import React from 'react';
import { t } from 'i18next';
import Images from '../Images';
import MiniProducts from '../Components/PageComponents/MiniProducts';

export default function Homepage() {
  return (
    <>
      <div className="font-pop p-5 pt-20 w-full flex flex-wrap justify-center content-center min-h-screen bg-gradient-to-r from-white to-red-100">
        <div className="w-full max-w-7xl grid gap-5 place-content-center place-items-center xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="w-full p-0 grid grid-cols-1 gap-5 place-content-center place-items-start">
            <h1 className="xl:text-4xl lg:text-4xl whitespace-pre-wrap text-3xl text-brand-red font-bold">
              {t('pages.homepage.banner.header')}
            </h1>
            <p className="text-zinc-500 font-medium whitespace-pre-wrap xl:text-lg lg:text-lg text-md">
              {t('pages.homepage.banner.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 place-content-center place-items-center">
            <img
              src={Images.Homebanner}
              className="w-full max-w-md object-contain"
              alt="3D Donate"
            />
          </div>
        </div>
      </div>
      <MiniProducts />
      <div className="bg-zinc-100 font-pop grid grid-cols-1 place-content-start place-items-center py-16 px-5">
        <div className="w-full max-w-xl grid grid-cols-1 place-content-start place-items-center gap-3">
          <h1 className="text-brand-red text-center text-3xl font-bold">
            {t('pages.homepage.section-how-help.header')}
          </h1>
          <h2 className="text-zinc-400 text-xl font-normal">
            {t('pages.homepage.section-how-help.sub-header')}
          </h2>
          <p className="text-zinc-400 text-sm font-light w-full text-center">
            {t('pages.homepage.section-how-help.desc')}
          </p>
        </div>
      </div>
    </>
  );
}
