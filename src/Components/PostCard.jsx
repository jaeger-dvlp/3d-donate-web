import i18next, { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

import { BsArrowRight } from 'react-icons/bs';

export default function PostCard({ postContent }) {
  const post = {
    id: postContent.id,
    slug: postContent.slug,
    thumbnail: postContent.thumbnail,
    title: postContent.title,
    body: postContent.body,
    excerpt: postContent.excerpt,
    links: postContent.links,
    date: postContent.date,
    creator: postContent.creator,
  };
  return (
    <div
      className="w-full relative h-full fade-in group hover:bg-zinc-50 xl:max-w-lg lg:max-w-lg max-w-xs
  flex flex-col justify-start !gap-0 transition-all duration-200 shadow-xl hover:border-zinc-200
bg-white rounded-xl overflow-hidden border border-zinc-100 p-0"
    >
      <div className="w-full h-full self-start max-h-[15rem] overflow-hidden relative grid grid-cols-1 place-content-start place-items-center">
        <Link
          className="overflow-hidden place-self-start w-full h-full max-h-[15rem] border-b border-b-zinc-200"
          to={post.links[i18next.language]}
        >
          {post.thumbnail ? (
            <img
              className="w-full object-cover h-[15rem]"
              src={post.thumbnail}
              alt={post.slug}
            />
          ) : (
            <div className="w-full h-[15rem] grid grid-cols-1 place-content-center place-items-center">
              <div className="w-16 h-16 rounded-full bg-brand-red/30" />
            </div>
          )}
        </Link>
      </div>

      <div className="w-full h-full flex flex-col">
        <h1 className="xl:text-lg px-5 pt-5 self-start w-full lg:text-lg text-lg text-left text-gray-400 font-semibold">
          {post.title[i18next.language]}
        </h1>
        <p className="w-full px-5 text-left text-zinc-400 py-3 text-md">
          {post.excerpt[i18next.language]}
        </p>
        <Link
          className="mx-5 mb-5 mt-auto flex gap-2 text-brand-red hover:underline text-sm"
          to={post.links[i18next.language]}
        >
          <span className="self-center">{t('buttons.read-more')}</span>
          <BsArrowRight className="self-center group-hover:translate-x-2 transition-all draution-150" />
        </Link>
      </div>
    </div>
  );
}
