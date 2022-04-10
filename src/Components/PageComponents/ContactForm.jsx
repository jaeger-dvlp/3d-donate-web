import { t } from 'i18next';
import React from 'react';

import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <div className="w-full font-pop grid grid-cols-1 gap-16 py-16 px-5 bg-white place-content-start place-items-center">
      <h1 className="p-3 text-center rounded-lg w-full max-w-[15rem] bg-red-100 text-brand-red font-bold text-xl">
        {t('labels.contact-us')}
      </h1>
      <div className="w-full relative overflow-hidden max-w-4xl grid grid-cols-6 place-items-start place-content-start gap-0 rounded-xl border-brand-red border-2 shadow-xl">
        <div className="w-full xl:py-10 lg:py-10 p-5 grid grid-cols-1 place-content-start place-items-start gap-3 bg-red-50 !h-full xl:col-span-2 lg:col-span-2 col-span-full xl:border-r-2 lg:border-r-2 xl:border-b-0 lg:border-b-0 border-r-0 border-b-2 border-brand-red">
          <h1 className="text-xl font-semibold text-brand-red ">
            Contact Information
          </h1>
          <p className="text-left text-sm text-zinc-500">
            You can contact us and provide support by using our filling the
            contact form.
          </p>
          <div className="w-full mt-10 flex justify-start content-center gap-x-2">
            <BsFillTelephoneFill className="p-2 self-center text-3xl bg-red-100 rounded-md text-brand-red" />
            <a
              className="text-xs self-center hover:underline text-zinc-500"
              href="tel:+90 (532) 323 3232"
            >
              +90 (532) 323 3232
            </a>
          </div>
          <div className="w-full flex justify-start content-center gap-x-2">
            <FiMail className="p-2 self-center text-3xl bg-red-100 rounded-md text-brand-red" />
            <a
              className="text-xs self-center hover:underline text-zinc-500"
              href="mailto:3ddonate@noreply.com"
            >
              3ddonate@noreply.com
            </a>
          </div>
          <div className="w-full flex justify-start content-center gap-x-2">
            <FaMapMarkerAlt className="p-2 self-center text-3xl bg-red-100 rounded-md text-brand-red" />
            <span className="text-xs w-full max-w-[10rem] self-center text-zinc-500">
              Yeşilce, Seçilmiş Sk. No:2, 34418 Kâğıthane/İstanbul
            </span>
          </div>
        </div>
        <div className="w-full h-full xl:col-span-4 lg:col-span-4 col-span-full bg-white p-5 xl:py-10 lg:py-10">
          x
        </div>
      </div>
    </div>
  );
}
