import React, { useCallback, useMemo } from 'react';

const CartRow = React.memo(({ item, onQuantityChange }) => {
  const handleChange = useCallback((e) => {
    onQuantityChange(item.id, e.target.value);
  }, [item.id, onQuantityChange]);

  const subtotal = useMemo(() => (item.price * item.quantity).toFixed(2), [item.price, item.quantity]);

  return (
    <tr className="border-b">
      <td className="py-4 flex items-center">
        <img src={item.photo} alt={item.name} className="w-16 h-16 object-cover mr-4" />
        <span className="text-red-500">{item.name}</span>
      </td>
      <td className="py-4">${item.price.toFixed(2)}</td>
      <td className="py-4">
        <input
          type="number"
          value={item.quantity}
          className="border p-2 w-16 text-center"
          onChange={handleChange}
          min="1"
        />
      </td>
      <td className="py-4">${subtotal}</td>
    </tr>
  );
});

export default CartRow;