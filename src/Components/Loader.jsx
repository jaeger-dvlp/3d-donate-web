import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Loader() {
  const pathname = useLocation();
  const [loaderStyle, setLoaderStyle] = useState(
    '!visible !opacity-100 !transition-all !duration-[0ms]',
  );

  useEffect(() => {
    setLoaderStyle('!visible !opacity-100 !transition-all !duration-[0ms]');

    setTimeout(() => {
      setLoaderStyle('!invisible !opacity-0 !transition-all !duration-[700ms]');
    }, 700);
  }, [pathname]);

  return (
    <div
      className={`${loaderStyle} fixed w-screen h-screen z-[99999999999] left-0 top-0 bg-white text-brand-red flex flex-wrap justify-center content-center p-0 m-0`}
    >
      <div className="rounded-full shadow-[0_0px_10px_#de00007c] ">
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-50"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-100"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    </div>
  );
}
