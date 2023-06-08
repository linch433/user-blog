import PropTypes from "prop-types";
import userAvatar from '../../assets/user_avatar.webp';
import TruncatedText from "../../style/TruncatedText.jsx";

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
					className='w-full h-full object-cover bg-int-white-main'
				/>
			</div>

			<div className='flex-1 max-w-[15rem]'>
				<TruncatedText text={user.email}/>
				<TruncatedText text={user.name}/>
				<TruncatedText text={user.profession}/>
			</div>
		</div>
	);
};

UsersCard.propTypes = {
	user: PropTypes.object
}

export default UsersCard;
