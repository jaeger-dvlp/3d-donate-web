/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unneeded-ternary */
import { t } from 'i18next';
import React, { useContext, useRef, useState } from 'react';
import json from 'country-region-data/data.json';

import { BsCheckLg } from 'react-icons/bs';
import MainContext from '../Contexts/MainContext';

export default function Checkout() {
  const checkoutForm = useRef();
  const { myCart, setMyCart, popup, setPopup } = useContext(MainContext);
  const [checkoutDetails, setCheckoutDetails] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    personAddress: '',
    formMessage: '',
    postCode: '',
    country: 'Turkey',
    province: 'Istanbul',
  });

  if (!myCart) {
    return (
      <div className="w-ful fade-in font-pop xl:pt-36 gap-14 lg:pt-36 pt-28 p-5 grid grid-cols-1 place-content-start place-items-center">
        <div className="w-full min-h-[70vh] xl:max-w-xl lg:max-w-xl max-w-lg grid grid-cols-1 place-content-start place-items-center">
          <h1 className="text-2xl my-5 text-brand-red font-semibold w-full">
            {t('pages.checkout.header')}
          </h1>
          <h2 className="text-lg text-zinc-500 font-normal w-full">
            {t('labels.cart-empty')}
          </h2>
        </div>
      </div>
    );
  }

  const submitCheckoutForm = (e) => {
    e.preventDefault();
    // axios.post etc.
    setPopup({
      ...popup,
      status: 'loading',
      isVisible: true,
      text: t('labels.order-sending'),
    });

    setTimeout(() => {
      setPopup({
        ...popup,
        status: 'success',
        isVisible: true,
        text: t('labels.order-sent'),
      });
      setMyCart(null);
    }, 2000);
  };

  return (
    <div className="w-full font-pop xl:pt-36 gap-14 lg:pt-36 pt-28 p-5 grid grid-cols-1 place-content-start place-items-center">
      <div className="w-full min-h-[70vh] xl:max-w-xl lg:max-w-xl max-w-lg grid grid-cols-1 place-content-start place-items-center">
        <h1 className="text-2xl my-5 text-brand-red font-semibold w-full">
          {t('pages.checkout.header')}
        </h1>
        <form
          ref={checkoutForm}
          onSubmit={submitCheckoutForm}
          className="w-full grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-start place-items-start gap-5"
        >
          <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
            <span className="text-zinc-600 text-sm">
              {t('forms.checkout-form.inputs.fullName.label')}
            </span>
            <input
              className="w-full border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
              placeholder={t('forms.checkout-form.inputs.fullName.placeholder')}
              type="text"
              name="name"
              required
              onChange={(e) => {
                setCheckoutDetails({
                  ...checkoutDetails,
                  fullName: e.target.value,
                });
              }}
              value={checkoutDetails.fullName}
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
            <span className="text-zinc-600 text-sm">
              {t('forms.checkout-form.inputs.emailAddress.label')}
            </span>
            <input
              className="w-full border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
              placeholder={t(
                'forms.checkout-form.inputs.emailAddress.placeholder',
              )}
              type="email"
              name="email"
              required
              onChange={(e) => {
                setCheckoutDetails({
                  ...checkoutDetails,
                  emailAddress: e.target.value,
                });
              }}
              value={checkoutDetails.emailAddress}
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
            <span className="text-zinc-600 text-sm">
              {t('forms.checkout-form.inputs.phoneNumber.label')}
            </span>
            <input
              className="w-full border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
              placeholder={t(
                'forms.checkout-form.inputs.phoneNumber.placeholder',
              )}
              type="text"
              name="phonenumber"
              required
              onChange={(e) => {
                setCheckoutDetails({
                  ...checkoutDetails,
                  phoneNumber: e.target.value,
                });
              }}
              value={checkoutDetails.phoneNumber}
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
            <span className="text-zinc-600 text-sm">
              {t('forms.checkout-form.inputs.postCode.label')}
            </span>
            <input
              className="w-full border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
              placeholder={t('forms.checkout-form.inputs.postCode.placeholder')}
              type="text"
              name="postcode"
              required
              onChange={(e) => {
                setCheckoutDetails({
                  ...checkoutDetails,
                  postCode: e.target.value,
                });
              }}
              value={checkoutDetails.postCode}
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
            <span className="text-zinc-600 text-sm">
              {t('forms.checkout-form.inputs.country.label')}
            </span>
            <select
              className="w-full bg-white border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 h-[2.5rem] p-2 rounded-md"
              placeholder={t('forms.checkout-form.inputs.country.placeholder')}
              type="text"
              name="country"
              required
              onChange={(e) => {
                setCheckoutDetails({
                  ...checkoutDetails,
                  country: e.target.value,
                  province: json.find(
                    ({ countryName }) => countryName === e.target.value,
                  ).regions[0].name,
                });
              }}
              defaultValue="Turkey"
            >
              {json.map((country) => (
                <option key={country.countryName} value={country.countryName}>
                  {country.countryName}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full grid grid-cols-1 gap-2 place-content-start place-items-start">
            <span className="text-zinc-600 text-sm">
              {t('forms.checkout-form.inputs.province.label')}
            </span>
            <select
              className="w-full bg-white border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 h-[2.5rem] p-2 rounded-md"
              placeholder={t('forms.checkout-form.inputs.province.placeholder')}
              type="text"
              name="province"
              required
              onChange={(e) => {
                setCheckoutDetails({
                  ...checkoutDetails,
                  province: e.target.value,
                });
              }}
              defaultValue="Istanbul"
            >
              {json
                .find(
                  ({ countryName }) => countryName === checkoutDetails.country,
                )
                .regions.map((province) => (
                  <option key={province.name} value={province.name}>
                    {province.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-full col-span-full grid grid-cols-1 gap-2 place-content-start place-items-start">
            <span className="text-zinc-600 text-sm">
              {t('forms.checkout-form.inputs.personAddress.label')}
            </span>
            <input
              className="w-full border !outline-none ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
              placeholder={t(
                'forms.checkout-form.inputs.personAddress.placeholder',
              )}
              type="text"
              name="postcode"
              required
              onChange={(e) => {
                setCheckoutDetails({
                  ...checkoutDetails,
                  personAddress: e.target.value,
                });
              }}
              value={checkoutDetails.personAddress}
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-2 col-span-full place-content-start place-items-start">
            <span className="text-zinc-600 text-sm">
              {t('forms.checkout-form.inputs.orderNotes.label')}
            </span>
            <textarea
              className="w-full border !outline-none min-h-[8rem] ring-brand-red/30 focus:ring-4 ring-0  border-brand-red/70 text-sm placeholder:text-zinc-400/70 text-zinc-600 p-2 rounded-md"
              placeholder={t(
                'forms.checkout-form.inputs.orderNotes.placeholder',
              )}
              name="order-notes"
              onChange={(e) => {
                setCheckoutDetails({
                  ...checkoutDetails,
                  formMessage: e.target.value,
                });
              }}
              value={checkoutDetails.formMessage}
            />
          </div>
          <div className="w-full col-span-full">
            <button
              type="submit"
              className="bg-brand-red hover:bg-brand-red/70 transition-all duration-200 active:scale-90 !outline-none focus:ring-4 ring-brand-red/30 ring-0 flex justify-center flex-nowrap gap-2 place-items-center p-2 rounded-md text-white w-full max-w-[9rem]"
            >
              <span>{t('buttons.complete')}</span>
              <BsCheckLg className="text-sm p-0 m-0" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
