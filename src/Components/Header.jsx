import React from 'react';
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
        <div className="flex flex-wrap content-center justify-end gap-x-5">
          <button
            type="button"
            className="p-1 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            Anasayfa
          </button>
          <button
            type="button"
            className="p-1 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            Ürünler
          </button>
          <button
            type="button"
            className="p-1 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            İletişim
          </button>
          <button
            type="button"
            className="p-1 px-4 min-w-[6rem] transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            Neler Yapıyoruz?
          </button>
          <button
            type="button"
            className="p-1 px-2 transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            x
          </button>
          <button
            type="button"
            className="p-1 px-2 transition-all duration-150 rounded-md hover:bg-red-200 bg-[#FFE7E7] text-red-500"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}
