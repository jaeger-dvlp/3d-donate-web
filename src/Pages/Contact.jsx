import i18next from 'i18next';
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../Components/PageComponents/ContactForm';
import Contents from '../Content';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>{Contents.header.contact.title[i18next.language]}</title>
      </Helmet>
      <div className="w-full font-pop xl:pt-36 gap-14 lg:pt-36 pt-28 p-5 grid grid-cols-1 place-content-start place-items-center">
        <ContactForm />
      </div>
    </>
  );
}
