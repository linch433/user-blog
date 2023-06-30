import { Form, Formik } from 'formik';
import InputField from '../../style/InputField.jsx';
import SubmitButton from '../../style/SubmitButton.jsx';
import Modal from '../../style/ModalWindow/Modal.jsx';
import PropTypes from 'prop-types';

const UpdateInfoModalView = ({ isModalActive, setIsModalActive, initialValues, onSubmit }) => {
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
                <div className='text-2xl font-semibold'>Edit user info:</div>
                <div className='flex flex-col w-full gap-3 px-12'>
                  <InputField name='name' placeholder='Name' />
                  <InputField name='extra_details' placeholder='Extra details' />
                  <InputField name='skills' placeholder='Skills' />
                  <InputField name='profession' placeholder='Profession' />
                  <InputField name='details' placeholder='Details' />
                </div>
                <div className='mb-4'>
                  <SubmitButton>Update</SubmitButton>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

UpdateInfoModalView.propTypes = {
  isModalActive: PropTypes.bool,
  setIsModalActive: PropTypes.func,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default UpdateInfoModalView;
