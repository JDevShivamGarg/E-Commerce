import React from 'react';
import * as Yup from 'yup';
import {Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import Input from './Input'

function ForgetPage() {
  function callForgetpass(values) {
    console.log('Form values', values);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  const initialValues={
      email: "",
    }
  return (
    <Formik initialValues = {initialValues} onSubmit = {callForgetpass} validationSchema = {schema}>
    <Form  className='h-screen bg-blue-800 flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center'>
        <div className='mb-8 aspect-square w-40'>
          <img src='https://i.ibb.co/z4yMvj6/image.webp' alt='Shopping Cart Icon' />
        </div>
        <Input type='email' name='email' placeholder='EMAIL'/> 

        <button type='submit' className='bg-white px-8 py-2 text-blue-800 rounded'>
          Request Password reset
        </button>
      </div>
      <div className='text-white mt-2'>Back to <span><Link className='hover:text-black' to='/signup'>Sign Up</Link></span></div>
    </Form>
    </Formik>
  );
}

export default ForgetPage;
