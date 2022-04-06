/* eslint-disable indent */
import i18next, { t } from 'i18next';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

import Images from '../Images';
import Contents from '../Content';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full fixed left-0 top-0 font-pop flex flex-wrap justify-center content-start  bg-white border-b-4 border-b-red-400 shadow-xl p-5 xl:py-5 lg:py-5 py-2">
      <div className="w-full max-w-7xl flex justify-between">
        <div className="logo-container">
          <a href="/" className=" group ">
            <img
              src={Images.Logo}
              alt="3D Donate Logo"
              className="w-full scale-100 group-hover:scale-110 transition-all duration-150 max-w-[5rem]"
            />
          </a>
        </div>
        <div className="xl:flex lg:flex hidden flex-wrap content-center justify-end gap-x-5">
          <Link
            to={Contents.header.homepage.links[i18next.language]}
            className="p-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.homepage')}
          </Link>
          <Link
            to={Contents.header.products.links[i18next.language]}
            className="p-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.products')}
          </Link>
          <Link
            to={Contents.header.contact.links[i18next.language]}
            className="p-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.contact')}
          </Link>
          <Link
            to={Contents.header.whatarewedoing.links[i18next.language]}
            className="p-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.whatarewedoing')}
          </Link>
          <Link
            to={Contents.header.account.links[i18next.language]}
            className="p-1 px-2 flex flex-wrap justify-center content-center text-lg transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            <FaUser />
          </Link>
          <button
            type="button"
            className="p-1 relative group px-2 flex flex-wrap justify-center content-center text-lg transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            <MdLanguage />
            <div className="py-1 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:visible opacity-0 scale-75 invisible w-full absolute top-full left-0">
              <div className="text-sm border-2 border-red-400/70 grid grid-cols-1 place-content-start place-items-start w-full rounded-md overflow-hidden p-0">
                <a
                  href={
                    i18next.language === 'tr'
                      ? window.location.pathname.slice(
                          3,
                          window.location.pathname.length,
                        )
                      : `/tr${window.location.pathname}`
                  }
                  className="p-1 w-full text-center transition-all duration-150 hover:bg-red-200 bg-white text-red-500"
                >
                  {i18next.language === 'tr' ? 'EN' : 'TR'}
                </a>
              </div>
            </div>
          </button>
        </div>
        <div className="xl:hidden lg:hidden flex flex-wrap content-center justify-end gap-x-5">
          <label
            htmlFor="mobileMenuBtn"
            className="p-2 z-[90] cursor-pointer relative group px-2 flex flex-wrap justify-center content-center text-lg transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            <input
              id="mobileMenuBtn"
              className="hidden"
              type="checkbox"
              onChange={(e) => setMobileMenu(e.target.checked)}
              defaultChecked={false}
            />
            {mobileMenu ? (
              <IoIosClose className="scale-150" />
            ) : (
              <GiHamburgerMenu />
            )}
          </label>
        </div>
      </div>
      <div
        className={`${
          mobileMenu
            ? 'left-0 opacity-100 visible'
            : 'left-full opacity-0 invisible'
        } fixed xl:hidden border-l-4 border-red-400 lg:hidden grid grid-cols-1 p-5 place-content-start place-items-center pt-20 top-0 w-full h-full bg-white transition-all duration-500`}
      >
        <div className="grid grid-cols-1 gap-3 place-content-start place-items-center max-w-sm w-full">
          <Link
            to={Contents.header.homepage.links[i18next.language]}
            className="p-1 text-center px-4 w-full transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.homepage')}
          </Link>
          <Link
            to={Contents.header.products.links[i18next.language]}
            className="p-1 text-center px-4 w-full transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.products')}
          </Link>
          <Link
            to={Contents.header.contact.links[i18next.language]}
            className="p-1 text-center px-4 w-full transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.contact')}
          </Link>
          <Link
            to={Contents.header.whatarewedoing.links[i18next.language]}
            className="p-1 text-center px-4 w-full transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.whatarewedoing')}
          </Link>
          <Link
            to={Contents.header.account.links[i18next.language]}
            className="p-1 text-center px-4 w-full transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.account')}
          </Link>
          <div className="py-2" />
          <a
            href={
              i18next.language === 'tr'
                ? window.location.pathname.slice(
                    3,
                    window.location.pathname.length,
                  )
                : `/tr${window.location.pathname}`
            }
            className="p-1 text-center px-4 w-full transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {i18next.language === 'tr' ? 'English' : 'Türkçe'}
          </a>
        </div>
      </div>
    </div>
  );
}
