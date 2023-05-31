import PropTypes from "prop-types";
import userAvatar from '../../assets/user_avatar.webp';

const UsersCard = ({user}) => {
  return (
    <div className='flex flex-col bg-main-bg-light max-w-[15rem]'>
      <div className="h-60 w-60">
        <img
          src={
            user.avatar
              ? `http://test-blog-api.ficuslife.com${user.avatar}`
              : userAvatar
          }
          alt='User avatar'
          loading='lazy'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='flex-1 truncate'>
        <div>{user.email}</div>
        <div>{user.name}</div>
        <div>{user.extra_details}</div>
        <div>{user.skills}</div>
        <div>{user.profession}</div>
        <div>{user.details}</div>
      </div>
    </div>
  );
};

UsersCard.propTypes = {
  user: PropTypes.object
}

export default UsersCard;
