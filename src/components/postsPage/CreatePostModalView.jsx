import React from 'react';
import Modal from '../../style/ModalWindow/Modal';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import InputField from '../../style/InputField';
import SubmitButton from '../../style/SubmitButton';

const CreatePostModalView = ({ isModalActive, setIsModalActive, initialValues, onSubmit }) => {
  return (
    <div>
      <Modal
        width='w-[35%]'
        height='h-auto'
        active={isModalActive}
        closeModal={() => setIsModalActive(false)}
      >
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <div className='flex flex-row items-center justify-center'>
              <div className='flex flex-col gap-5 items-center pt-5 w-full'>
                <div className='text-2xl font-semibold'>Create new post</div>
                <div className='flex flex-col w-full gap-3 px-12'>
                  <InputField name='title' placeholder='Title' />
                  <InputField name='fullText' placeholder='Full text' />
                  <InputField name='description' placeholder='Description' />
                </div>
                <div className='mb-4'>
                  <SubmitButton>Create</SubmitButton>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

CreatePostModalView.propTypes = {
  isModalActive: PropTypes.bool,
  setIsModalActive: PropTypes.func,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default CreatePostModalView;
