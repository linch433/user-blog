import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';
import { DateFormat } from '../../features/utils/dateFormat.js';
import TextWithTitle from '../../style/TextWithTitle.jsx';

const PostCard = ({ post }) => {
  const { title, fullText, description, dateCreated, image, likes, postedBy } = post;

  return (
    <div className='flex flex-col bg-main-bg-light rounded-xl p-4'>
      <div>
        <TextWithTitle title='Title' text={title} />
        <TextWithTitle title='Full text' text={fullText} />
        <TextWithTitle title='Description' text={description} />
        <TextWithTitle title='Posted by' text={postedBy} />
        <div>{DateFormat.getFormatDate(dateCreated)}</div>
      </div>
      <div className='flex justify-center'>
        {image &&
          <img
            src={`http://test-blog-api.ficuslife.com${image}`}
            alt='Post image'
            className='pt-10 w-[75%]'
          />
        }
      </div>
      <div className='flex flex-row gap-1 items-center mt-4'>
        <AiFillLike size='20' />
        {likes.length}
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object,
};


export default PostCard;
