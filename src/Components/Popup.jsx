import { t } from 'i18next';
import React, { useContext } from 'react';

import { AiOutlineCheckCircle, AiOutlineLoading } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import MainContext from '../Contexts/MainContext';

export default function Popup() {
  const { popup, setPopup } = useContext(MainContext);

  const icons = {
    error: (
      <BiErrorCircle className="text-5xl w-full h-full max-h-[3rem] max-w-[3rem] text-brand-red p-2 rounded-full bg-brand-red/10" />
    ),
    loading: (
      <AiOutlineLoading className="text-5xl w-full h-full max-h-[3rem] max-w-[3rem] animate-spin text-sky-400 p-2 rounded-full bg-sky-400/20" />
    ),
    success: (
      <AiOutlineCheckCircle className="text-5xl w-full h-full max-h-[3rem] max-w-[3rem] text-green-400 p-2 rounded-full bg-green-400/20" />
    ),
  };

  return (
    <div
      className={`${
        popup.isVisible ? 'visible opacity-100' : 'invisible opacity-0'
      } fixed z-[99] font-pop transition-all duration-150 grid grid-cols-1 place-content-center place-items-center p-5 left-0 top-0 h-screen w-full bg-black bg-opacity-30`}
    >
      <div
        className={`${popup.isVisible ? 'scale-100' : 'scale-75'}
       w-full gap-3 grid grid-cols-1 place-content-start place-items-center shadow-xl transition-all duration-300 rounded-2xl max-w-md bg-white p-5`}
      >
        <div className="w-full grid grid-cols-1 place-content-center place-items-center">
          {icons[popup.status]}
        </div>
        <p className="w-full text-zinc-600 text-center grid grid-cols-1 place-content-center place-items-center min-h-[7rem]">
          {popup.text}
        </p>
        {popup.status !== 'loading' && (
          <button
            onClick={() => setPopup({ ...popup, isVisible: false })}
            type="button"
            className="p-3 fade-in focus:ring-2 ring-brand-red/30 active:scale-90 font-semibold hover:bg-brand-red/20 transition-all duration-100 rounded-lg w-full max-w-[8rem] border border-brand-red/50 bg-white text-brand-red"
          >
            {t('buttons.okay')}
          </button>
        )}
      </div>
    </div>
  );
}
