/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useDeletePostByIdMutation, useGetPostsQuery } from '../../app/store/features/posts.api';
import { PropTypes } from 'prop-types';
import PreLoader from '../../style/PreLoader/PreLoader';
import { DateFormat } from './../../features/utils/dateFormat';
import { AiFillHeart } from 'react-icons/ai';
import TextWithTitle from '../../style/TextWithTitle';
import { toast } from 'react-toastify';
import { BsFillTrashFill, BsFillReplyFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const PostsByUser = ({ userId, userName }) => {
  const { data: postsByUser, isLoading } = useGetPostsQuery({ postedBy: userId });
  const navigate = useNavigate();
  const [deletePostById] = useDeletePostByIdMutation();

  const handleDeletePostById = useCallback((postId) => {
    deletePostById(postId)
      .unwrap()
      .then((response) => toast.success(response.message))
      .catch((error) => console.warn(error));
  }, []);

  const handleNavigateToPostInfo = useCallback((postId, userName) => {
    navigate(`posts/${postId}`, { state: { postId: postId, userName: userName } });
  }, []);

  if (isLoading) return <PreLoader />;

  return (
    <div className='flex flex-col w-screen items-center'>
      {postsByUser &&
        postsByUser.data.map((userPost) => (
          <div
            key={userPost._id}
            className='flex flex-col bg-main-bg-light mb-4 w-[90%] md:w-[60%] p-2 rounded-xl'
          >
            <div className='flex flex-row justify-between'>
              <TextWithTitle title='Title' text={userPost.title} />
              <div>{DateFormat.getFormatDate(userPost.dateCreated)}</div>
            </div>
            <TextWithTitle title='Description' text={userPost.description} />
            <div className='flex flex-row justify-between items-center mt-4'>
              <div className='flex flex-row gap-1 items-center'>
                <AiFillHeart size='20' />
                {userPost.likes.length}
              </div>
              <div className='flex flex-row gap-1 items-cetner'>
                <BsFillReplyFill
                  size='20'
                  className='cursor-pointer'
                  onClick={() => handleNavigateToPostInfo(userPost._id, userName)}
                />
                <BsFillTrashFill
                  size='20'
                  className='cursor-pointer'
                  onClick={() => handleDeletePostById(userPost._id)}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

PostsByUser.propTypes = {
  userId: PropTypes.string,
  userName: PropTypes.string,
};

export default PostsByUser;
