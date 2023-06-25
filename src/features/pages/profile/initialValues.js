const ProfileInitialValues = ({ data }) => {
  const initialValues = {
    email: data?.email,
    name: data?.name,
    extra_details: data?.extra_details,
    skills: data?.skills,
    profession: data?.profession,
    details: data?.details,
  };

  return { initialValues };
};

export default ProfileInitialValues;