import {useState} from "react";
import {useGetMyUserInfoQuery, useUpdateUserImageMutation} from "../app/store/features/users.api.js";
import {PagePreLoader} from "../style/PreLoader/PreLoader.jsx";
import {DateFormat} from "../features/utils/dateFormat.js";
import TextWithTitle from "../style/TextWithTitle.jsx";
import {useNavigate} from "react-router-dom";
import AvatarImage from "../style/AvatarImage.jsx";
import {toast} from "react-toastify";
import Modal from "../style/ModalWindow/Modal.jsx";
import {Form, Formik} from "formik";
import InputField from "../style/InputField.jsx";
import SubmitButton from "../style/SubmitButton.jsx";

const ProfilePage = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const {data, isLoading, isError, error} = useGetMyUserInfoQuery();
    const [updateImage] = useUpdateUserImageMutation();
    const navigate = useNavigate();

    const initialValues = {
        email: data?.email,
        name: data?.name,
        extra_details: data?.extra_details,
        skills: data?.skills,
        profession: data?.profession,
        details: data?.details
    }

    const onSubmit = () => {
        console.log('onSubmit callback');
    }

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleImageUpload = async () => {
        if (!selectedImage) {
            return;
        }
        const formData = new FormData();
        formData.append('avatar', selectedImage);

        try {
            await updateImage({userId: data._id, fileData: formData});
            toast.success('Your image avatar has been updated successfully!');
        } catch {
            toast.error('Sorry, something went wrong');
        }
    };

    if (isLoading) return <PagePreLoader/>
    if (error?.status === 403) {
        localStorage.removeItem('AUTH_TOKEN');
        navigate('/login');
    }
    if (isError) return <div className='flex items-center justify-center'>Error</div>

    if (data && isError === false)
        return (
            <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col justify-center items-center gap-4 mt-6 md:flex-row md:gap-10">
                    <div className="w-3/4 px-4 md:w-96">
                        <AvatarImage avatar={data?.avatar} additionalStyle='rounded-xl'/>
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
                <div className='flex flex-col gap-4 md:flex-row mt-6'>
                    <div
                        className='flex flex-row items-center bg-main-bg-light px-8 py-4 text-int-white-main font-semibold rounded-xl shadow-xl'
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageSelect}
                        />
                        <button
                            className='border-2 px-6 py-2 rounded-xl shadow-2xl hover:bg-secondary-bg-black '
                            onClick={handleImageUpload}
                        >
                            Upload
                        </button>
                    </div>
                    <Modal
                        width='w-[35%]'
                        height='h-auto'
                        active={isModalActive}
                        closeModal={() => setIsModalActive(false)}
                    >
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                        >
                            <Form>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="flex flex-col gap-5 items-center pt-5 w-full">
                                        <div className='flex flex-col w-full gap-3 px-12'>
                                            <InputField name="email" placeholder="Email"/>
                                            <InputField name="name" placeholder="Name"/>
                                            <InputField name="extra_details" placeholder="Extra details"/>
                                            <InputField name="skills" placeholder="Skills"/>
                                            <InputField name="profession" placeholder="Profession"/>
                                            <InputField name="details" placeholder="Details"/>
                                        </div>
                                        <div className='mb-4'>
                                            <SubmitButton>Update info</SubmitButton>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </Modal>
                    <button
                        className='bg-main-bg-light px-8 py-4 text-int-white-main font-semibold rounded-xl hover:bg-secondary-bg-black shadow-xl'
                        onClick={() => setIsModalActive(true)}
                    >
                        Edit Info
                    </button>
                </div>
            </div>
        );
};

export default ProfilePage;
