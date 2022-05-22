/* eslint-disable arrow-body-style */
import { t } from 'i18next';
import React from 'react';
import PostCard from '../Components/PostCard';

import Contents from '../Content';

export default function Blog() {
  const AllPosts = () => {
    return Contents.posts.map((post) => <PostCard postContent={post} />);
  };

  return (
    <div className="w-full font-pop xl:pt-36 gap-14 lg:pt-36 pt-28 p-5 grid grid-cols-1 place-content-start place-items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 place-content-start place-items-center">
        <div className="w-full pb-5 gap-3 grid grid-cols-1 place-content-start place-items-start">
          <h1 className="text-2xl text-brand-red font-semibold">
            {t('pages.blog.header')}
          </h1>
          <p className="text-sm pb-2 whitespace-pre-wrap text-zinc-500">
            {t('pages.blog.description')}
          </p>
        </div>
        <div className="w-full relative font-pop place-content-start place-items-center max-w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <AllPosts />
        </div>
      </div>
    </div>
  );
}
