import HTTPService from '../api/HTTPService.js';
import {toast} from "react-toastify";

export const fetchUsers = async (setIsLoading, setUsers) => {
  setIsLoading(true);
  try {
    const response = await HTTPService.get('/users');
    const {data} = response.data;
    setUsers(data);

    console.log(data);
    setIsLoading(false);
  } catch {
    toast.error('Something went wrong!');
    setIsLoading(false);
  }
}
