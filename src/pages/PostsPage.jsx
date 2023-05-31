import {useGetPostsQuery} from '../app/store/features/posts.api.js';
import {PagePreLoader} from "../style/PreLoader/PreLoader.jsx";
import PostCard from "../components/postsPage/PostCard.jsx";

const PostsPage = () => {
  const {data, isLoading} = useGetPostsQuery();

  if (isLoading) return <PagePreLoader/>
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center w-full gap-6 md:w-[75%]'>
        {data && data.data.map(post => (
          <PostCard key={post._id} post={post}/>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
