import { useState } from 'react';
import {
  useGetMyUserInfoQuery,
  useUpdateUserImageMutation,
  useUpdateUserInfoMutation,
} from '../app/store/features/users.api.js';
import { DateFormat } from '../features/utils/dateFormat.js';
import TextWithTitle from '../style/TextWithTitle.jsx';
import AvatarImage from '../style/AvatarImage.jsx';
import { toast } from 'react-toastify';
import ImageInput from '../components/profilePage/ImageInput.jsx';
import UpdateInfoModalView from '../components/profilePage/UpdateInfoModalView.jsx';
import ProfileInitialValues from '../features/pages/profile/initialValues.js';
import DataStatusChecker from '../components/profilePage/DataStatusChecker.jsx';
import PostsByUser from '../components/profilePage/PostsByUser.jsx';

const ProfilePage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { data, isLoading, isError, error, isFetching } = useGetMyUserInfoQuery();
  const [updateImage] = useUpdateUserImageMutation();
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const { initialValues } = ProfileInitialValues({ data });

  const onSubmit = (values) => {
    const updatedInfo = {
      name: values.name,
      extra_details: values.extra_details,
      skills: values.skills,
      profession: values.profession,
      details: values.details,
    };

    updateUserInfo({ userId: data._id, data: updatedInfo })
      .unwrap()
      .then(() => toast.success('User info successfully updated'))
      .catch(() => toast.error('Something went wrong'));
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = () => {
    if (!selectedImage) {
      return;
    }
    const formData = new FormData();
    formData.append('avatar', selectedImage);

    updateImage({ userId: data._id, fileData: formData })
      .unwrap()
      .then(() => toast.success('Image updated successfully!'))
      .catch((error) => toast.error(error.data.error.message));
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <DataStatusChecker
        isError={isError}
        error={error}
        isFetching={isFetching}
        isLoading={isLoading}
      >
        {data && (
          <>
            <div className='flex flex-col justify-center items-center gap-4 mt-6 md:flex-row md:gap-10'>
              <div className='w-3/4 px-4 md:w-96'>
                <AvatarImage avatar={data?.avatar} additionalStyle='rounded-xl' />
              </div>
              <div className='flex flex-col gap-2 px-2 text-lg md:text-2xl'>
                <TextWithTitle text={data._id} title='User id' />
                <TextWithTitle text={data.email} title='Email' />
                <TextWithTitle text={data.name} title='Name' />
                <TextWithTitle text={data.extra_details} title='Extra details' />
                <TextWithTitle text={data.skills} title='Skills' />
                <TextWithTitle text={data.profession} title='Profession' />
                <TextWithTitle text={data.details} title='Details' />
                <TextWithTitle
                  text={DateFormat.getFormatDate(data.dateCreated)}
                  title='Date created'
                />
              </div>
            </div>
            <div className='flex flex-col gap-4 md:flex-row mt-6'>
              <ImageInput
                handleImageSelect={handleImageSelect}
                handleImageUpload={handleImageUpload}
              />
              <UpdateInfoModalView
                setIsModalActive={setIsModalActive}
                initialValues={initialValues}
                onSubmit={onSubmit}
                isModalActive={isModalActive}
              />
              <button
                className='bg-main-bg-light px-8 py-4 text-int-white-main font-semibold rounded-xl hover:bg-secondary-bg-black shadow-xl'
                onClick={() => setIsModalActive(true)}
              >
                Edit Info
              </button>
            </div>
            <div className='mt-4'>
              <div className='text-2xl font-bold text-center mb-2'>Posts by User</div>
              <PostsByUser userId={data._id} userName={data.name} />
            </div>
          </>
        )}
      </DataStatusChecker>
    </div>
  );
};

export default ProfilePage;
