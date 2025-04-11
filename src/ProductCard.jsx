import React from 'react';
import Product from './Product';

const ProductCard = React.memo(({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {products.map(product => (
        <div key={product.id} className="flex justify-center">
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            photo={product.photo}
            category={product.category}
          />
        </div>
      ))}
    </div>
  );
});

export default ProductCard;
