import PreLoader, { PagePreLoader } from '../style/PreLoader/PreLoader.jsx';
import UsersCard from '../components/usersPage/UsersCard.jsx';
import { useGetUsersQuery } from '../app/store/features/users.api.js';
import { useState } from 'react';

const UsersPage = () => {
  const [usersCount, setUsersCount] = useState(20);
  const params = {
    limit: usersCount,
  };
  const { data, isLoading, isFetching } = useGetUsersQuery(params);

  if (isLoading) return <PagePreLoader />;

  return (
    <div className='flex flex-col items-center justify-center mt-6'>
      <div className='flex flex-wrap justify-center w-full gap-6 md:w-[75%]'>
        {data && data.data.map(user => (
          <UsersCard key={user._id} user={user} />
        ))}
      </div>
      <button
        className='bg-main-bg-light my-6 p-4 text-int-white-main font-semibold rounded-xl'
        onClick={() => setUsersCount(usersCount + 20)}
        disabled={isFetching}
      >
        {isFetching ? (<PreLoader />) : 'Next users'}
      </button>
    </div>
  );
};

export default UsersPage;
