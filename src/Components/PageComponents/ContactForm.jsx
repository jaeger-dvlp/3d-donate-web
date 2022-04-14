/* eslint-disable implicit-arrow-linebreak */
import { t } from 'i18next';
import React, { useEffect, useRef, useState } from 'react';

import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

export default function ContactForm() {
  const contactForm = useRef();
  const [contactDetails, setContactDetails] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    personAddress: '',
    formMessage: '',
  });

  const submitContactForm = (e) => {
    e.preventDefault();
    // axios.post etc.
  };

  useEffect(() => {
    contactForm.current.addEventListener('submit', submitContactForm);

    return () =>
      contactForm.current.removeEventListener('submit', submitContactForm);
  }, [contactDetails]);

  return (
    <div className="w-full !z-1 font-pop grid grid-cols-1 gap-16 py-16 px-5 bg-white place-content-start place-items-center">
      <h1 className="p-3 text-center rounded-lg w-full max-w-[15rem] bg-red-100 text-brand-red font-bold text-xl">
        {t('labels.contact-us')}
      </h1>
      <div className="w-full relative overflow-hidden xl:max-w-4xl lg:max-w-4xl max-w-md grid grid-cols-6 place-items-start place-content-start gap-0 rounded-xl border-brand-red border-2 shadow-xl">
        <div className="w-full xl:py-10 lg:py-10 p-5 grid grid-cols-1 place-content-start place-items-start gap-3 bg-red-50 !h-full xl:col-span-2 lg:col-span-2 col-span-full xl:border-r-2 lg:border-r-2 xl:border-b-0 lg:border-b-0 border-r-0 border-b-2 border-brand-red">
          <h1 className="text-xl font-semibold text-brand-red ">
            {t('forms.contact-form.info-column.header')}
          </h1>
          <p className="text-left text-sm text-zinc-500">
            {t('forms.contact-form.info-column.description')}
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
        <div className="w-full xl:max-w-full lg:max-w-full max-w-md grid grid-cols-1 xl:col-span-4 lg:col-span-4 col-span-full ">
          <form
            ref={contactForm}
            className="w-full grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5 bg-white xl:p-10 lg:p-10 p-5"
          >
            <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
              <span className="text-zinc-600 text-sm">
                {t('forms.contact-form.inputs.emailAddress.label')}
              </span>
              <input
                className="w-full border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
                placeholder={t(
                  'forms.contact-form.inputs.emailAddress.placeholder',
                )}
                type="email"
                name="email"
                required
                onChange={(e) => {
                  setContactDetails({
                    ...contactDetails,
                    emailAddress: e.target.value,
                  });
                }}
                value={contactDetails.emailAddress}
              />
            </div>
            <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
              <span className="text-zinc-600 text-sm">
                {t('forms.contact-form.inputs.fullName.label')}
              </span>
              <input
                className="w-full border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
                placeholder={t(
                  'forms.contact-form.inputs.fullName.placeholder',
                )}
                type="text"
                name="name"
                required
                onChange={(e) => {
                  setContactDetails({
                    ...contactDetails,
                    fullName: e.target.value,
                  });
                }}
                value={contactDetails.fullName}
              />
            </div>
            <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
              <span className="text-zinc-600 text-sm">
                {t('forms.contact-form.inputs.phoneNumber.label')}
              </span>
              <input
                className="w-full border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
                placeholder={t(
                  'forms.contact-form.inputs.phoneNumber.placeholder',
                )}
                type="tel"
                name="phone"
                required
                onChange={(e) => {
                  setContactDetails({
                    ...contactDetails,
                    phoneNumber: e.target.value,
                  });
                }}
                value={contactDetails.phoneNumber}
              />
            </div>
            <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
              <span className="text-zinc-600 text-sm">
                {t('forms.contact-form.inputs.personAddress.placeholder')}
              </span>
              <input
                className="w-full border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
                placeholder={t(
                  'forms.contact-form.inputs.personAddress.placeholder',
                )}
                type="text"
                name="address"
                required
                onChange={(e) => {
                  setContactDetails({
                    ...contactDetails,
                    personAddress: e.target.value,
                  });
                }}
                value={contactDetails.personAddress}
              />
            </div>
            <div className="w-full grid grid-cols-1 gap-2 col-span-full place-content-start place-items-start">
              <span className="text-zinc-600 text-sm">
                {t('forms.contact-form.inputs.formMessage.label')}
              </span>
              <textarea
                className="w-full border !outline-none min-h-[8rem] ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
                placeholder={t(
                  'forms.contact-form.inputs.formMessage.placeholder',
                )}
                name="message"
                required
                onChange={(e) => {
                  setContactDetails({
                    ...contactDetails,
                    formMessage: e.target.value,
                  });
                }}
                value={contactDetails.formMessage}
              />
            </div>
            <div className="w-full col-span-full">
              <button
                type="submit"
                className="bg-brand-red hover:bg-brand-red/70 transition-all duration-200 active:scale-90 !outline-none focus:ring-4 ring-brand-red/30 ring-0 flex justify-center flex-nowrap gap-1 place-items-center p-2 rounded-md text-white w-full max-w-[9rem]"
              >
                <span>{t('buttons.send')}</span>
                <BiMailSend className="text-xl p-0 m-0" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
