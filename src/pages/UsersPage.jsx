import {PagePreLoader} from "../style/PreLoader/PreLoader.jsx";
import UsersCard from "../components/usersPage/UsersCard.jsx";
import {useGetUsersQuery} from '../app/store/features/users.api.js';

const UsersPage = () => {
  const {data, isLoading} = useGetUsersQuery();

  if (isLoading) return <PagePreLoader/>
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-wrap justify-center w-full gap-6 md:w-[75%]'>
        {data && data.data.map(user => (
          <UsersCard key={user._id} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
