import React from 'react';
import { Link } from 'react-router-dom';

const Product = React.memo(({ id, photo, category, name, price }) => {
  return (
    <Link to={`/productDetails/${id}`} className="block w-full">
      <div className="bg-white flex flex-col w-full hover:shadow-lg transition-shadow">
        <div className="relative pb-[100%]">
          <img src={photo} className="absolute top-0 left-0 w-full h-full object-cover" alt={name} />
        </div>
        <div className="flex flex-col justify-start mt-4 p-4">
          <h3 className="text-gray-400 text-sm">{category}</h3>
          <h1 className="font-bold">{name}</h1>
          <img className="w-20" src="https://www.pngmart.com/files/7/Rating-Star-Download-PNG-Image.png" alt="Rating" />
          <h2 className="font-bold text-sm">$ {price}</h2>
        </div>
      </div>
    </Link>
  );
});

export default Product;
