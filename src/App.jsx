import React, { useMemo, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import CartPage from './CartPage';
import Error from './Error';
import Signup from './Signup';
import Login from './Login';
import ForgetPage from './ForgetPage';

function App() {
  const navigate = useNavigate();

  const products = useMemo(() => [
    { id: 1, photo: 'https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-white.jpg', category: 'Mugs', name: 'Personalised Mugs', price: 15.00 },
    { id: 2, photo: 'https://th.bing.com/th/id/R.e098632c9c3f5e6406c8955366502b72?rik=InnUspRuQe7Dyw&pid=ImgRaw&r=0', category: 'Mugs', name: 'Plain Coffee Mug', price: 19.00 },
    { id: 3, photo: 'https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_1280.png', category: 'T-shirt', name: 'Red T-shirt', price: 34.00 },
    { id: 4, photo: 'https://th.bing.com/th/id/R.e098632c9c3f5e6406c8955366502b72?rik=InnUspRuQe7Dyw&pid=ImgRaw&r=0', category: 'Mugs', name: 'Personalized Mug', price: 24.00 },
    { id: 5, photo: 'https://th.bing.com/th/id/OIP.HbtMrojNvXz2-pPOAw_EcAHaJ4?rs=1&pid=ImgDetMain', category: 'T-shirt', name: 'Beige T-shirt', price: 34.00 },
    { id: 6, photo: 'https://th.bing.com/th/id/OIP.cgyjedKjuUCW7S5xPRjuggHaH5?rs=1&pid=ImgDetMain', category: 'T-shirt', name: 'Green Shirt', price: 34.00 },
    { id: 7, photo: 'https://cdn.pixabay.com/photo/2016/04/13/15/15/high-heels-1327021_1280.jpg', category: 'Shoes', name: 'Beige heels', price: 15.00 },
    { id: 8, photo: 'https://cdn.pixabay.com/photo/2021/09/28/01/46/shoes-6662986_1280.jpg', category: 'Shoes', name: 'Sequin shoes', price: 15.26 },
    { id: 9, photo: 'https://cdn.pixabay.com/photo/2022/08/15/13/35/sandals-7387889_1280.jpg', category: 'Shoes', name: 'Black Heels', price: 15.00 }
  ], []);

  const ProductListElement = useCallback(() => <ProductList products={products} />, [products]);
  const ProductDetailsElement = useCallback(() => <ProductDetails products={products} />, [products]);
  const CartPageElement = useCallback(() => <CartPage />, []);
  const ErrorElement = useCallback(() => <Error />, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-pass" element={<ForgetPage />} />
          <Route path="/" element={<ProductListElement />} />
          <Route path="/productDetails/:productId" element={<ProductDetailsElement />} />
          <Route path="/cart" element={<CartPageElement />} />
          <Route path="*" element={<ErrorElement />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
