import React from 'react';
import { useField } from 'formik';

function Input({ type, name, placeholder, className }) {
  const [field, meta] = useField(name);
  const { value, onChange, onBlur } = field;
  const { error, touched } = meta;

  return (
    <div className='mb-4'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={'bg-blue-800 text-white px-5 py-2 rounded border border-white focus:bg-white focus:text-black ' + className}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && error && <p className='text-red-500 text-xs'>{error}</p>}
    </div>
  );
}

export default Input;
