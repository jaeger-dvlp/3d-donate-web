import React from 'react';
import i18next, { t } from 'i18next';
import Helmet from 'react-helmet';

import { MdOutlineFileDownload } from 'react-icons/md';

import Images from '../Images';
import MiniProducts from '../Components/PageComponents/MiniProducts';
import ContactForm from '../Components/PageComponents/ContactForm';
import MiniBlogs from '../Components/PageComponents/MiniBlogs';
import Contents from '../Content';

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>{Contents.header.homepage.title[i18next.language]}</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${Images.Homebanner})` }}
        className="font-pop p-5 pt-20 w-full flex flex-wrap bg-cover bg-center justify-center content-end min-h-screen bg-gradient-to-r from-white to-brand-red/10"
      >
        <div className=" bg-black/60 backdrop-blur-xs w-full max-w-2xl rounded-xl gap-5 p-5 flex flex-wrap justify-start content-start">
          <div className="w-full p-0 grid grid-cols-1 gap-5 place-content-center place-items-start">
            <p className="text-zinc-200 w-full font-medium  xl:text-lg lg:text-lg text-md">
              {t('pages.homepage.banner.description')}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full font-pop flex flex-wrap justify-center content-center m-0">
        <div className="w-full grid grid-cols-1 place-content-start place-items-center p-0 pt-16 max-w-3xl">
          <div className="w-full p-5">
            <img
              src={Images.Galata}
              alt="Galata Kulesi"
              className="w-full max-w-3xl rounded-xl object-cover object-center h-full max-h-[20rem] "
            />
          </div>
          <div className="p-5">
            <div className="w-full p-5 !text-xs bg-black/10 rounded-xl mt-0 grid gap-5 grid-cols-1 place-content-start place-items-center">
              <p className="text-center text-zinc-600 text-sm">
                {t('pages.homepage.galata.description.0')}
              </p>
              <p className="text-center text-zinc-600 text-sm">
                {t('pages.homepage.galata.description.1')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <MiniProducts />
      <MiniBlogs />
      <div
        id="how-can-you-support"
        className="bg-zinc-100 font-pop grid grid-cols-1 place-content-start place-items-center py-16 px-5"
      >
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
            {i18next.language !== 'en' && (
              <a
                href={Images.pdfs.PDFSupportUs}
                target="_blank"
                rel="noreferrer"
                className="p-2 active:scale-90 flex mt-3 justify-center gap-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-brand-red/20 bg-brand-red/10 text-brand-red"
              >
                {t('buttons.download-pdf')}
                <MdOutlineFileDownload className="self-center" />
              </a>
            )}
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
            {i18next.language !== 'en' && (
              <a
                href={Images.pdfs.PDFCooperation}
                target="_blank"
                rel="noreferrer"
                className="p-2 active:scale-90 flex mt-3 justify-center gap-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-brand-red/20 bg-brand-red/10 text-brand-red"
              >
                {t('buttons.download-pdf')}
                <MdOutlineFileDownload className="self-center" />
              </a>
            )}
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
            {i18next.language !== 'en' && (
              <a
                href={Images.pdfs.PDFHowToSupportUs}
                target="_blank"
                rel="noreferrer"
                className="p-2 active:scale-90 flex mt-3 justify-center gap-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-brand-red/20 bg-brand-red/10 text-brand-red"
              >
                {t('buttons.download-pdf')}
                <MdOutlineFileDownload className="self-center" />
              </a>
            )}
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
