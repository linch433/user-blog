import PropTypes from 'prop-types';
import TruncatedText from '../../style/TruncatedText.jsx';
import AvatarImage from '../../style/AvatarImage.jsx';

const UsersCard = ({ user }) => {
  return (
    <div className='flex flex-col bg-main-bg-light max-w-[15rem]'>
      <div className='h-60 w-60'>
        <AvatarImage avatar={user.avatar} />
      </div>
      <div className='flex-1 max-w-[15rem]'>
        <TruncatedText text={user.email} />
        <TruncatedText text={user.name} />
        <TruncatedText text={user.profession} />
      </div>
    </div>
  );
};

UsersCard.propTypes = {
  user: PropTypes.object,
};

export default UsersCard;
