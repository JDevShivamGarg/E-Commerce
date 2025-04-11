import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  //instead of using local storage we will fetch values using apis
  const callLogin = async (values) => {
       
      if (storedUser.username == values.username && storedUser.password == values.password) {
        navigate('/');
      } else {
        alert('Invalid username or password');
      }
    } 
  
  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  });

  const initialValues = {
    username: storedUser.username || "" ,
    password: storedUser.password || ""
  };

  return (
    <Formik initialValues={initialValues} onSubmit={callLogin} validationSchema={schema}>
      <Form className='h-screen bg-blue-800 flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'>
          <div className='mb-8 aspect-square w-40'>
            <img src='https://i.ibb.co/z4yMvj6/image.webp' alt='Shopping Cart Icon' />
          </div>
          <Input type='text' name='username' placeholder='USERNAME' />
          <Input type='password' name='password' placeholder='PASSWORD' />
          <button type='submit' className='bg-white px-24 py-2 text-blue-800 rounded'>Login</button>
          <div className='mt-4'>
            <Link to='/forget-pass' className='text-white hover:text-black'>Forgot password?</Link>
          </div>
        </div>
        <div className='text-white mt-2'>New Here? <span><Link className='hover:text-black' to='/signup'>Sign Up</Link></span></div>
      </Form>
    </Formik>
  );
}

export default Login;
