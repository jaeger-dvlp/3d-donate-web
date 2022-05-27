/* eslint-disable react/no-danger */
/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18next from 'i18next';
import { Helmet } from 'react-helmet';

import NotFound from './NotFound';
import Contents from '../Content';

export default function PostPage() {
  const [post, setPost] = React.useState('loading');
  const params = useParams();
  const { postSlug } = params;
  useEffect(() => {
    setTimeout(() => {
      setPost(
        Contents.posts.find((thePost) => thePost.slug === postSlug) || null,
      );
    }, 2000);
  }, []);

  if (post === null) {
    return <NotFound />;
  }

  if (post === 'loading') {
    return (
      <div className="fixed fade-in w-screen h-screen z-[1] left-0 top-0 bg-white text-brand-red flex flex-wrap justify-center content-center p-0 m-0">
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
  return (
    <>
      <Helmet>
        <title>{`3D Donate | ${post.title[i18next.language]}`}</title>
      </Helmet>
      <div className="min-h-[70vh] fade-in-slow font-pop xl:pt-36 lg:pt-36 pt-28 w-full flex flex-wrap justify-center content-start p-0 m-0">
        <div className="w-full p-5 max-w-3xl grid grid-cols-1 place-content-start place-items-center">
          <h1 className="text-2xl text-brand-red mb-5 font-semibold">
            {post.title[i18next.language]}
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: post.body[i18next.language] }}
            className="text-zinc-500 post-body whitespace-pre-wrap"
          />
        </div>
      </div>
    </>
  );
}
