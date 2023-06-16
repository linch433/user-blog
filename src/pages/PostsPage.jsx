import { useGetPostsQuery } from '../app/store/features/posts.api.js';
import PreLoader, { PagePreLoader } from '../style/PreLoader/PreLoader.jsx';
import PostCard from '../components/postsPage/PostCard.jsx';
import { useState } from 'react';

const PostsPage = () => {
  const [postsCount, setPostsCount] = useState(10);
  const { data, isLoading, isFetching } = useGetPostsQuery(postsCount);

  if (isLoading) return <PagePreLoader />;

  return (
    <div className='flex flex-col justify-center items-center mt-6'>
      <div className='flex flex-col justify-center w-full px-4 gap-6 md:w-[50%]'>
        {data && data.data.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <button
        className='bg-main-bg-light my-6 p-4 text-int-white-main font-semibold rounded-xl'
        onClick={() => setPostsCount(postsCount + 10)}
        disabled={isFetching}
      >
        {isFetching ? (<PreLoader />) : 'Next posts'}
      </button>
    </div>
  );
};

export default PostsPage;
