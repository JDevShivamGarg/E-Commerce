import React, { memo, useCallback } from 'react';

const filterOptions = [
  { value: 'default', label: 'Default Sort' },
  { value: 'title', label: 'Sort by title' },
  { value: 'asc_price', label: 'Sort by price: low to high' },
  { value: 'des_price', label: 'Sort by price: high to low' },
];

const Filter = memo(({ onFilterChange }) => {
  const handleChange = useCallback((event) => {
    onFilterChange(event.target.value);
  }, [onFilterChange]);

  return (
    <div>
      <select 
        name="filter" 
        id="filter" 
        className="bg-gray-100 pr-6 py-2 text-gray-500 rounded-md"
        onChange={handleChange}
        aria-label="Sort options"
      >
        {filterOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

Filter.displayName = 'Filter';

export default Filter;