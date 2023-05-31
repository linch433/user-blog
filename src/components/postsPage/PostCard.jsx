import PropTypes from "prop-types";

const PostCard = ({post}) => {
  const {title, fullText, description, dateCreated, image, likes, postedBy} = post;
  console.log(likes);

  return (
    <div className='flex flex-col bg-main-bg-light rounded-xl p-4'>
      <div>
        <div>{title}</div>
        <div>{fullText}</div>
        <div>{description}</div>
        <div>{dateCreated}</div>
        <div>{postedBy}</div>
      </div>
      <div className='flex justify-center'>
        {image &&
          <img
            src={`http://test-blog-api.ficuslife.com${image}`}
            alt='Post image'
            loading='lazy'
            className='pt-10 w-[75%]'
          />
        }
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object,
}


export default PostCard;
