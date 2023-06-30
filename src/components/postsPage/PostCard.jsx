import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSetLikeForPostByIdMutation } from '../../app/store/features/posts.api.js';
import { useGetUserByIdQuery } from '../../app/store/features/users.api.js';
import { DateFormat } from '../../features/utils/dateFormat.js';
import TextWithTitle from '../../style/TextWithTitle.jsx';

const PostCard = ({ post }) => {
  const { title, fullText, description, dateCreated, image, likes, postedBy } = post;

  const { data: user } = useGetUserByIdQuery(postedBy);
  const [setLikeForPost] = useSetLikeForPostByIdMutation();
  const navigate = useNavigate();

  const navigateToPostById = () => {
    navigate(`${post._id}`, { state: { postInfo: post, userName: user?.name } });
  };

  const handleLikeButtonClick = () => {
    setLikeForPost(post._id)
      .unwrap()
      .catch((error) => toast.error(error.data.error));
  };

  return (
    <div
      className='flex flex-col bg-main-bg-light rounded-xl p-4 cursor-pointer hover:bg-[#A689A3] transition duration-300 ease-in-out'
      onClick={navigateToPostById}
    >
      <div>
        <TextWithTitle title='Title' text={title} />
        <TextWithTitle title='Full text' text={fullText} />
        <TextWithTitle title='Description' text={description} />
        {/*<TextWithTitle title='Posted by' text={user?.name} />*/}
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
            onClick={() => handleLikeButtonClick()}
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
