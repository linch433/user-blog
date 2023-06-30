import PropTypes from 'prop-types';
import { DateFormat } from '../../features/utils/dateFormat.js';
import { useGetUserByIdQuery } from '../../app/store/features/users.api.js';
import { AiFillHeart } from 'react-icons/ai';

const PostComment = ({ comment }) => {
  const { _id, commentedBy, followedCommentID, text, dateCreated, likes } = comment;
  const { data: user, isError } = useGetUserByIdQuery(commentedBy);

  console.log(_id, followedCommentID);

  return (
    <div
      key={_id}
      className='flex w-[80%] flex-col bg-main-bg-light mb-4 rounded-lg px-4 py-2 md:w-[45%]'
    >
      <div className='flex flex-row justify-between'>
        <div className='font-semibold text-xl truncate'>
          {!isError ? user?.name : 'Deleted user'}
        </div>
        <div>{DateFormat.getFormatDate(dateCreated)}</div>
      </div>
      <div className='max-w-md'>
        <div className='truncate'>{text}</div>
      </div>
      <div className='flex flex-row items-center gap-0.5 mt-4'>
        <AiFillHeart className='cursor-pointer' size='20' /> {likes.length}
      </div>
    </div>
  );
};

PostComment.propTypes = {
  comment: PropTypes.object,
};

export default PostComment;
