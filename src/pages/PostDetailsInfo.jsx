import { useLocation } from 'react-router-dom';
import TextWithTitle from '../style/TextWithTitle.jsx';
import { DateFormat } from '../features/utils/dateFormat.js';
import {
  useCreateCommentByPostIdMutation,
  useGetCommentsQuery,
} from '../app/store/features/comments.api.js';
import PostComment from '../components/postsPage/PostComment.jsx';
import PreLoader, { PagePreLoader } from '../style/PreLoader/PreLoader.jsx';
import { useGetPostByIdQuery } from '../app/store/features/posts.api.js';
import InputField from '../style/InputField.jsx';
import { Formik, Form } from 'formik';
import { initialValuesToCreateNewComment } from '../features/pages/posts/initialValues.js';
import SubmitButton from '../style/SubmitButton.jsx';

const PostDetailsInfo = () => {
  const locationState = useLocation().state;
  const postId = locationState.postId;
  const userName = locationState.userName;

  const { data: postData, isLoading: postLoading } = useGetPostByIdQuery(postId);
  const { data: commentsData, isLoading: commentLoading } = useGetCommentsQuery(postId);
  const [createCommentById] = useCreateCommentByPostIdMutation();

  const onSubmit = (values) => {
    const commentData = {
      text: values.text,
      followedCommentID: null,
    };

    createCommentById({ postId: postId, data: commentData })
      .unwrap()
      .then((response) => console.log(response))
      .catch((error) => console.warn(error));
  };

  if (postLoading && commentLoading) return <PagePreLoader />;

  return (
    <div className='flex flex-col items-center mt-6'>
      <div className='flex flex-col items-center w-[80%]'>
        {postData && (
          <div className='w-full'>
            <TextWithTitle title='Title' text={postData?.title} />
            <TextWithTitle title='Full text' text={postData?.fullText} />
            <TextWithTitle title='Description' text={postData?.description} />
            <TextWithTitle title='Posted by' text={userName} />
            <div>{DateFormat.getFormatDate(postData?.dateCreated)}</div>
          </div>
        )}
      </div>
      <div className='flex justify-center w-[80%] md:w-[45%]'>
        {postData?.image && (
          <img
            src={`http://test-blog-api.ficuslife.com${postData?.image}`}
            alt='Post image'
            className='pt-4 w-full'
          />
        )}
      </div>
      <Formik initialValues={initialValuesToCreateNewComment} onSubmit={onSubmit}>
        <Form>
          <div className='flex gap-5'>
            <InputField name='text' placeholder='Your comment' />
            <SubmitButton>Send</SubmitButton>
          </div>
        </Form>
      </Formik>
      <div className='flex flex-col w-full items-center mt-8'>
        {commentLoading ? (
          <PreLoader />
        ) : (
          commentsData &&
          commentsData.map((comment) => <PostComment key={comment._id} comment={comment} />)
        )}
      </div>
    </div>
  );
};

export default PostDetailsInfo;
