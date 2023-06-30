import userAvatar from '../assets/user_avatar.webp';
import PropTypes from 'prop-types';

const AvatarImage = ({ avatar, additionalStyle }) => {
  return (
    <img
      src={avatar ? `http://test-blog-api.ficuslife.com${avatar}` : userAvatar}
      alt='User avatar'
      loading='lazy'
      className={`w-full h-full object-cover bg-int-white-main ${additionalStyle}`}
    />
  );
};

AvatarImage.propTypes = {
  avatar: PropTypes.string,
  additionalStyle: PropTypes.string,
};

export default AvatarImage;
