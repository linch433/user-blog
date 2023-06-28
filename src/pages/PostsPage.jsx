import { useGetPostsQuery } from '../app/store/features/posts.api.js';
import { useState } from 'react';
import PreLoader, { PagePreLoader } from '../style/PreLoader/PreLoader.jsx';
import PostCard from '../components/postsPage/PostCard.jsx';
import ContentSearchBar from '../style/ContentSearchBar.jsx';

const PostsPage = () => {
  const [postsCount, setPostsCount] = useState(20);
  const [searchQuery, setSearchQuery] = useState();

  const { data, isLoading, isFetching } = useGetPostsQuery({ limit: postsCount, search: searchQuery });

  if (isLoading) return <PagePreLoader />;

  return (
    <div className='flex flex-col justify-center items-center mt-6'>
      <ContentSearchBar
        type='search'
        placeholder={`Search doesn't work`}
        value={searchQuery}
        disabled={true}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className='flex flex-col justify-center w-full px-4 gap-6 md:w-[50%]'>
        {data && data.data.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <button
        className='bg-main-bg-light my-6 p-4 text-int-white-main font-semibold rounded-xl'
        onClick={() => setPostsCount(postsCount + 20)}
        disabled={isFetching}
      >
        {isFetching ? (<PreLoader />) : 'Next posts'}
      </button>
    </div>
  );
};

export default PostsPage;
