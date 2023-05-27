import {useEffect, useState} from "react";
import HTTPService from '../features/api/api.js';
import {toast} from "react-toastify";

const MainPage = () => {
  const [responseInfo, setResponseInfo] = useState({});

  useEffect(() => {
    HTTPService.get('/auth/user')
      .then(response => {
        setResponseInfo(response.data);
      })
      .catch(() => {
        toast.error(`Something went wrong`)
      })
  }, [])

  return (
    <div className="flex items-center justify-center flex-col">
      <div>{responseInfo._id}</div>
      <div>{responseInfo.name}</div>
      <div>{responseInfo.email}</div>
      <div>{responseInfo.details}</div>
      <div>{responseInfo.extra_details}</div>
      <div>{responseInfo.profession}</div>
      <div>{responseInfo.skills}</div>
    </div>
  );
};

export default MainPage;
