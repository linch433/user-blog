import { useLocation } from 'react-router-dom';
import TextWithTitle from '../style/TextWithTitle.jsx';
import { DateFormat } from '../features/utils/dateFormat.js';
import { useGetCommentsQuery } from '../app/store/features/comments.api.js';
import DataStatusChecker from '../components/profilePage/DataStatusChecker.jsx';
import PostComment from '../components/postsPage/PostComment.jsx';

const PostDetailsInfo = () => {
  const locationState = useLocation().state;
  const { _id, title, fullText, description, dateCreated, image } = locationState.postInfo;
  const userName = locationState.userName;

  const { data: commentsData, isLoading, isFetching, isError, error } = useGetCommentsQuery(_id);

  return (
    <div className='flex flex-col items-center mt-6'>
      <div className='flex flex-col items-center w-[90%]'>
        <div>
          <TextWithTitle title='Title' text={title} />
          <TextWithTitle title='Full text' text={fullText} />
          <TextWithTitle title='Description' text={description} />
          <TextWithTitle title='Posted by' text={userName} />
          <div>{DateFormat.getFormatDate(dateCreated)}</div>
        </div>
      </div>
      <div className='flex justify-center w-[80%] md:w-[45%]'>
        {image && (
          <img
            src={`http://test-blog-api.ficuslife.com${image}`}
            alt='Post image'
            className='pt-4 w-full'
          />
        )}
      </div>
      <DataStatusChecker
        isError={isError}
        error={error}
        isFetching={isFetching}
        isLoading={isLoading}
      >
        <div className='flex flex-col w-full items-center mt-8'>
          {commentsData &&
            commentsData.map((comment) => <PostComment key={comment._id} comment={comment} />)}
        </div>
      </DataStatusChecker>
    </div>
  );
};

export default PostDetailsInfo;
