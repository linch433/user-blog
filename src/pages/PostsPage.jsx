import { useCreatePostMutation, useGetPostsQuery } from '../app/store/features/posts.api.js';
import { useCallback, useState } from 'react';
import PreLoader, { PagePreLoader } from '../style/PreLoader/PreLoader.jsx';
import PostCard from '../components/postsPage/PostCard.jsx';
import ContentSearchBar from '../style/ContentSearchBar.jsx';
import CreatePostModalView from '../components/postsPage/CreatePostModalView.jsx';
import { initialValuesToCreateNewPost } from '../features/pages/posts/initialValues.js';
import { toast } from 'react-toastify';

const PostsPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [postsCount, setPostsCount] = useState(20);
  const [searchQuery, setSearchQuery] = useState();

  const { data, isLoading, isFetching } = useGetPostsQuery({
    limit: postsCount,
    search: searchQuery,
  });
  const [createNewPost] = useCreatePostMutation();

  const onSubmit = useCallback((values, { resetForm }) => {
    const postData = {
      title: values.title,
      fullText: values.fullText,
      description: values.description,
    };

    createNewPost(postData)
      .unwrap()
      .then(() => toast.success('Your post created successfully!'))
      .then(() => setIsModalActive(false))
      .catch((error) => toast.error(error?.data.error[0].message));

    resetForm();
  }, []);

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
      <CreatePostModalView
        setIsModalActive={setIsModalActive}
        isModalActive={isModalActive}
        onSubmit={onSubmit}
        initialValues={initialValuesToCreateNewPost}
      />
      <button
        className='bg-main-bg-light px-8 py-4 text-int-white-main font-semibold rounded-xl hover:bg-secondary-bg-black transition duration-300 ease-in-out shadow-xl mb-6'
        onClick={() => setIsModalActive(true)}
      >
        Create a new post
      </button>
      <div className='flex flex-col justify-center w-full px-4 gap-6 md:w-[50%]'>
        {data && data.data.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
      <button
        className='bg-main-bg-light my-6 p-4 text-int-white-main font-semibold rounded-xl'
        onClick={() => setPostsCount(postsCount + 20)}
        disabled={isFetching}
      >
        {isFetching ? <PreLoader /> : 'Next posts'}
      </button>
    </div>
  );
};

export default PostsPage;
