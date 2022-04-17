import React from 'react';
import { t } from 'i18next';

import { MdOutlineFileDownload } from 'react-icons/md';

import Images from '../Images';
import MiniProducts from '../Components/PageComponents/MiniProducts';
import ContactForm from '../Components/PageComponents/ContactForm';

export default function Homepage() {
  return (
    <>
      <div className="font-pop p-5 pt-20 w-full flex flex-wrap justify-center content-center min-h-screen bg-gradient-to-r from-white to-brand-red/10">
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
            {t('pages.homepage.section-how-help.description')}
          </p>
        </div>
      </div>
      <div className="bg-white font-pop w-full grid grid-cols-1 place-conten-start place-items-center">
        <div className="w-full gap-5 bg-white py-20 px-5 max-w-6xl grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-start place-items-center">
          <div className="grid grid-cols-1 place-content-center place-items-center">
            <img
              src={Images.SupportUs}
              className="w-full xl:max-w-md lg:max-w-md max-w-sm max-h-[20rem] object-contain"
              alt="3D Donate Support Us"
            />
          </div>
          <div className="grid grid-cols-1 gap-3 place-content-center place-items-center">
            <h1 className="text-brand-red text-center text-3xl font-bold">
              {t('pages.homepage.mini-sections.0.header')}
            </h1>
            <p className="text-zinc-500 w-full max-w-lg text-md font-light text-center">
              {t('pages.homepage.mini-sections.0.description')}
            </p>
            <a
              download
              href="x"
              className="p-2 active:scale-90 flex mt-3 justify-center gap-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-brand-red/20 bg-brand-red/10 text-brand-red"
            >
              {t('buttons.download-pdf')}
              <MdOutlineFileDownload className="self-center" />
            </a>
          </div>
        </div>
        <div className="w-full gap-5 bg-white py-20 px-5 max-w-6xl grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-start place-items-center">
          <div className="grid xl:order-2 lg:order-2 -order-1 grid-cols-1 place-content-center place-items-center">
            <img
              src={Images.Cooperation}
              className="w-full xl:max-w-md lg:max-w-md max-w-sm max-h-[20rem] object-contain"
              alt="3D Donate Support Us"
            />
          </div>
          <div className="grid grid-cols-1 gap-3 place-content-center place-items-center">
            <h1 className="text-brand-red text-center text-3xl font-bold">
              {t('pages.homepage.mini-sections.1.header')}
            </h1>
            <p className="text-zinc-500 w-full max-w-lg text-md font-light text-center">
              {t('pages.homepage.mini-sections.1.description')}
            </p>
            <a
              download
              href="x"
              className="p-2 active:scale-90 flex mt-3 justify-center gap-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-brand-red/20 bg-brand-red/10 text-brand-red"
            >
              {t('buttons.download-pdf')}
              <MdOutlineFileDownload className="self-center" />
            </a>
          </div>
        </div>
        <div className="w-full gap-5 bg-white py-20 px-5 max-w-6xl grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-start place-items-center">
          <div className="grid grid-cols-1 place-content-center place-items-center">
            <img
              src={Images.HowToSupport}
              className="w-full xl:max-w-md lg:max-w-md max-w-sm max-h-[20rem] object-contain"
              alt="3D Donate Support Us"
            />
          </div>
          <div className="grid grid-cols-1 gap-3 place-content-center place-items-center">
            <h1 className="text-brand-red text-center text-3xl font-bold">
              {t('pages.homepage.mini-sections.2.header')}
            </h1>
            <p className="text-zinc-500 w-full max-w-lg text-md font-light text-center">
              {t('pages.homepage.mini-sections.2.description')}
            </p>
            <a
              download
              href="x"
              className="p-2 active:scale-90 flex mt-3 justify-center gap-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-brand-red/20 bg-brand-red/10 text-brand-red"
            >
              {t('buttons.download-pdf')}
              <MdOutlineFileDownload className="self-center" />
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
