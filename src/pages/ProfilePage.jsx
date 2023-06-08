import {useGetMyUserInfoQuery} from "../app/store/features/users.api.js";
import {PagePreLoader} from "../style/PreLoader/PreLoader.jsx";
import userAvatar from "../assets/user_avatar.webp";
import {DateFormat} from "../features/utils/dateFormat.js";
import TextWithTitle from "../style/TextWithTitle.jsx";

const ProfilePage = () => {
	const {data, isLoading, isError} = useGetMyUserInfoQuery();

	if (isLoading) return <PagePreLoader/>
	if (isError) return <div className='flex items-center justify-center'>Error</div>

	if (data && isError === false)
		return (
			<div className="flex flex-col justify-center items-center gap-4 mt-6 md:flex-row md:gap-10">
				<div className="w-3/4 px-4 md:w-96">
					<img
						src={
							data.avatar
								? `http://test-blog-api.ficuslife.com${data.avatar}`
								: userAvatar
						}
						alt='User avatar'
						loading='lazy'
						className='w-full h-full object-cover bg-int-white-main rounded-xl'
					/>
				</div>
				<div className='flex flex-col gap-2 px-2 text-lg md:text-2xl'>
					<TextWithTitle text={data._id} title='User id'/>
					<TextWithTitle text={data.email} title='Email'/>
					<TextWithTitle text={data.name} title='Name'/>
					<TextWithTitle text={data.extra_details} title='Extra details'/>
					<TextWithTitle text={data.skills} title='Skills'/>
					<TextWithTitle text={data.profession} title='Profession'/>
					<TextWithTitle text={data.details} title='Details'/>
					<TextWithTitle text={DateFormat.getFormatDate(data.dateCreated)} title='Date created'/>
				</div>
			</div>
		);
};

export default ProfilePage;
