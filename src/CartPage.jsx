import React, { useState, useEffect, useCallback, useMemo } from 'react';
import CartList from './CartList';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleQuantityChange = useCallback((id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, parseInt(quantity, 10)) } : item
      )
    );
  }, []);

  const handleUpdateCart = useCallback(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Cart updated successfully!');
  }, [cartItems]);

  const { subtotal, total } = useMemo(() => {
    const sub = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    return { subtotal: sub, total: sub };
  }, [cartItems]);

  return (
    <div className="p-10 mx-12 my-4 bg-white">
      <CartList
        items={cartItems}
        onQuantityChange={handleQuantityChange}
        onUpdateCart={handleUpdateCart}
      />
      <div className="flex justify-end mt-8 mx-6">
        <div className="bg-white p-6 border shadow w-1/3">
          <h2 className="text-xl font-bold mb-4 border-b pb-4">Cart totals</h2>
          <div className="flex justify-between font-bold mb-4 border-b pb-4">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold border-b pb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="hover:bg-gray-400 bg-red-500 text-white w-full mt-6 py-3 rounded">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;