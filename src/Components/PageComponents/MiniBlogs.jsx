import { t } from 'i18next';
import React from 'react';
import Contents from '../../Content';
import PostCard from '../PostCard';

export default function MiniBlogs() {
  const [posts, setPosts] = React.useState(null);
  const mockProducts = [
    Contents.posts[0],
    Contents.posts[1],
    Contents.posts[2],
  ];

  React.useEffect(() => {
    setPosts(
      <div className="w-full relative font-pop place-content-start place-items-center xl:max-w-full lg:max-w-full max-w-lg grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {mockProducts.map((post) => (
          <PostCard postContent={post} />
        ))}
      </div>,
    );
  }, []);
  return (
    <div className="font-pop bg-zinc-50 w-full grid grid-cols-1 p-5 py-16 place-content-start place-items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 place-content-start place-items-center">
        <div className="text-center w-full max-w-4xl gap-16 gap-x-0 grid grid-cols-1 place-content-start place-items-center">
          <h1 className="p-3 rounded-lg w-full max-w-[15rem] bg-brand-red/10 text-brand-red font-bold text-xl">
            {t('pages.blog.our-blog')}
          </h1>
          {posts}
        </div>
      </div>
    </div>
  );
}
