import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Error = memo(() => {
  return (
    <div className='flex flex-col items-center py-2 gap-2'>
      <img 
        className='h-80' 
        src='https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150584283.jpg?w=740&t=st=1720947116~exp=1720947716~hmac=4f9729ea8a8ce35a11319d188a4593556065c9249292edef9bc211b579b3fb8d'
        alt="Error illustration"
      />
      <h1 className='text-3xl'>Oops! Page not found</h1>
      <div className='text-center text-gray-400'>
        <p>We're sorry, the page you requested could not be found</p>
        <p>Please go back to the Home page</p>
      </div>
      <Link to='/'>
        <button className='text-2xl text-white bg-red-500 hover:bg-gray-400 rounded-3xl px-4 py-1 mt-2 hover:bg-black'>
          Home
        </button>
      </Link>
    </div>
  );
});

Error.displayName = 'Error';

export default Error;