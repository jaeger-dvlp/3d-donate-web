import React from 'react';
import ContactForm from '../Components/PageComponents/ContactForm';

export default function Contact() {
  return (
    <div className="w-full font-pop xl:pt-36 gap-14 lg:pt-36 pt-28 p-5 grid grid-cols-1 place-content-start place-items-center">
      <ContactForm />
    </div>
  );
}
