import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';

function Signup() {
  const navigate = useNavigate();

  const callSignup = (values) => {
    //instead of dumping values in localStorage we will fetch values using apis
    localStorage.setItem('user', JSON.stringify(values));
    navigate('/');
  };

  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  return (
    <Formik initialValues={initialValues} onSubmit={callSignup} validationSchema={schema}>
      <Form className='h-screen bg-blue-800 flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'>
          <div className='mb-8 aspect-square w-40'>
            <img src='https://i.ibb.co/z4yMvj6/image.webp' alt='Shopping Cart Icon' />
          </div>
          <Input type='text' name='username' placeholder='USERNAME' />
          <Input type='email' name='email' placeholder='EMAIL' />
          <Input type='password' name='password' placeholder='PASSWORD' />
          <Input type='password' name='confirmPassword' placeholder='CONFIRM PASSWORD' />
          <button type='submit' className='bg-white px-20 py-2 text-blue-800 rounded'>SIGN UP</button>
        </div>
        <div className='text-white mt-2'>Already have an account? <span><Link className='hover:text-black' to='/login'>Log In</Link></span></div>
        <div className='text-white mt-2'>Forgot your password? <span><Link className='hover:text-black' to='/forget-pass'>Reset Password</Link></span></div>
      </Form>
    </Formik>
  );
}

export default Signup;
