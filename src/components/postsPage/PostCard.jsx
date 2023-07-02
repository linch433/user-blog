import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSetLikeForPostByIdMutation } from '../../app/store/features/posts.api.js';
import { useGetUserByIdQuery } from '../../app/store/features/users.api.js';
import { DateFormat } from '../../features/utils/dateFormat.js';
import TextWithTitle from '../../style/TextWithTitle.jsx';
import { useCallback } from 'react';

const PostCard = ({ post }) => {
  const { _id, title, fullText, description, dateCreated, image, likes, postedBy } = post;

  const { data: user } = useGetUserByIdQuery(postedBy);
  const [setLikeForPost] = useSetLikeForPostByIdMutation();

  const navigate = useNavigate();

  const navigateToPostById = () => {
    navigate(`${post._id}`, { state: { postId: _id, userName: user?.name } });
  };

  const handleLikeButtonClick = useCallback((postId) => {
    setLikeForPost(postId)
      .unwrap()
      .catch((error) => toast.error(error?.data.error));
  }, []);

  return (
    <div
      className='flex flex-col bg-main-bg-light rounded-xl p-4 cursor-pointer hover:bg-[#A689A3] transition duration-300 ease-in-out'
      onClick={navigateToPostById}
    >
      <div>
        <TextWithTitle title='Title' text={title} />
        <TextWithTitle title='Full text' text={fullText} />
        <TextWithTitle title='Description' text={description} />
        <div>{DateFormat.getFormatDate(dateCreated)}</div>
      </div>
      <div className='flex justify-center'>
        {image && (
          <img
            src={`http://test-blog-api.ficuslife.com${image}`}
            alt='Post image'
            className='pt-10 w-[75%]'
          />
        )}
      </div>
      <div className='flex flex-row gap-1 items-center mt-4'>
        <div onClick={(e) => e.stopPropagation()}>
          <AiFillLike
            className='cursor-pointer'
            size='20'
            onClick={() => handleLikeButtonClick(post._id)}
          />
        </div>
        {likes.length}
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object,
};

export default PostCard;
