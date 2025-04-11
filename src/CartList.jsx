import React, { useState, useCallback, useMemo } from 'react';
import CartRow from './CartRow';

const CartList = React.memo(({ items, onQuantityChange, onUpdateCart }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleCouponChange = useCallback((e) => {
    setCouponCode(e.target.value);
  }, []);

  const handleApplyCoupon = useCallback(() => {
    
    console.log('Applying coupon:', couponCode);
  }, [couponCode]);

  const cartRows = useMemo(() => (
    items.map(item => (
      <CartRow key={item.id} item={item} onQuantityChange={onQuantityChange} />
    ))
  ), [items, onQuantityChange]);

  return (
    <div className="bg-white border shadow p-6 mx-6">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Product</th>
            <th className="text-left py-2">Price</th>
            <th className="text-left py-2">Quantity</th>
            <th className="text-left py-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartRows}
        </tbody>
      </table>
      <div className="flex mt-4 justify-between">
        <div className="flex">
          <input
            type="text"
            placeholder="Coupon code"
            className="border px-4 py-2 mr-4"
            value={couponCode}
            onChange={handleCouponChange}
          />
          <button className="hover:bg-gray-400 bg-red-500 text-white px-8 py-2 rounded" onClick={handleApplyCoupon}>
            APPLY COUPON
          </button>
        </div>
        <button className="hover:bg-gray-400 bg-red-500 text-white px-8 py-2 rounded" onClick={onUpdateCart}>
          UPDATE CART
        </button>
      </div>
    </div>
  );
});

export default CartList;