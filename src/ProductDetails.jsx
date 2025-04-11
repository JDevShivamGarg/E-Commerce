import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { IoChevronBackCircle } from "react-icons/io5";

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const currentProductIndex = products.findIndex(p => p.id === parseInt(productId));
  const product = products[currentProductIndex];

  useEffect(() => {
    setQuantity(1);
  }, [productId]);

  const handlePrevious = useCallback(() => {
    if (currentProductIndex > 0) {
      const previousProductId = products[currentProductIndex - 1].id;
      navigate(`/productDetails/${previousProductId}`);
    }
  }, [currentProductIndex, products, navigate]);

  const handleNext = useCallback(() => {
    if (currentProductIndex < products.length - 1) {
      const nextProductId = products[currentProductIndex + 1].id;
      navigate(`/productDetails/${nextProductId}`);
    }
  }, [currentProductIndex, products, navigate]);

  const addToCart = useCallback(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  }, [product, quantity]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <Link to="/" className="text-3xl block mt-4"><IoChevronBackCircle /></Link>
      <div className="flex flex-col md:flex-row shadow-xl p-5 bg-white max-w-4xl mx-auto mt-10">
        <div className="w-full md:w-1/2 aspect-w-1 aspect-h-1 mb-4 md:mb-0">
          <img className="w-full h-full object-cover" src={product.photo} alt={product.name} />
        </div>
        <div className="flex flex-col justify-start p-4 md:p-10 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <h3 className="font-bold text-xl mb-4">${product.price}</h3>
          <p className="text-gray-600 mb-4">
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.
          </p>
          <div className="flex items-center space-x-4">
            <input
              className="border-2 aspect-square w-12 h-12 text-center"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
            <button onClick={addToCart} className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-400">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button 
          onClick={handlePrevious} 
          className={`px-4 py-2 rounded ${currentProductIndex === 0 ? 'bg-gray-400 text-gray-500 cursor-not-allowed' : 'bg-gray-500 text-white hover:bg-gray-400'}`}
          disabled={currentProductIndex === 0}
        >
          Previous
        </button>
        <button 
          onClick={handleNext} 
          className={`px-4 py-2 rounded ${currentProductIndex === products.length - 1 ? 'bg-gray-400 text-gray-500 cursor-not-allowed' : 'bg-gray-500 text-white hover:bg-gray-400'}`}
          disabled={currentProductIndex === products.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
