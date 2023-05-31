import {useEffect, useState} from "react";
import {fetchUsers} from "../features/utils/fetchUsers.js";
import {PagePreLoader} from "../style/PreLoader/PreLoader.jsx";
import UsersCard from "../components/usersPage/UsersCard.jsx";
import {useGetUsersQuery} from "../app/store/features/apiSlice.js";

const UsersPage = () => {
  const {data: users, isError, isFetching, refetch} = useGetUsersQuery();

  // const [isLoading, setIsLoading] = useState(false);
  // const [usersInfo, setUsersInfo] = useState([]);

  // useEffect(() => {
  //   fetchUsers(setIsLoading, setUsersInfo);
  // }, []);

  if (isFetching) return <PagePreLoader/>
  if (users) return <div>Something</div>
  console.log(users);
  // return (
  //   <div className='flex items-center justify-center'>
  //     <div className='flex flex-wrap justify-center w-full gap-6 md:w-[75%]'>
  //       {usersInfo.map(user => (
  //         <UsersCard key={user._id} user={user}/>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default UsersPage;
