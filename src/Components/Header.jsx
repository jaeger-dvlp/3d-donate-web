import { t } from 'i18next';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Images from '../Images';

export default function Header() {
  return (
    <div className="w-full font-pop flex flex-wrap justify-center content-start  bg-white border-b-4 border-b-red-400 shadow-xl p-5">
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
            to="/"
            className="p-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.homepage')}
          </Link>
          <Link
            to="/"
            className="p-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.products')}
          </Link>
          <Link
            to="/"
            className="p-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.contact')}
          </Link>
          <Link
            to="/"
            className="p-1 text-center px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            {t('header.whatarewedoing')}
          </Link>
          <Link
            to="/"
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
              <div className="text-sm rounded-md bg-[#FFE7E7] text-red-500">
                <ul className="grid grid-cols-1 gap-3 py-2">
                  <li>
                    <Link
                      to="/"
                      className="p-1 text-center transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
                    >
                      TR
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="p-1 text-center transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
                    >
                      EN
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
