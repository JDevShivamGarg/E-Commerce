import React, { useState, useMemo, useCallback } from 'react';
import ProductCard from './ProductCard';
import Page from './Page';

const sortOptions = [
  { value: 'default', label: 'Default Sort' },
  { value: 'title', label: 'Sort by title' },
  { value: 'asc_price', label: 'Sort by price: low to high' },
  { value: 'des_price', label: 'Sort by price: high to low' },
];

function ProductList({ products }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    switch (filter) {
      case 'asc_price':
        return result.sort((a, b) => a.price - b.price);
      case 'des_price':
        return result.sort((b, a) => b.price - a.price);
      case 'title':
        return result.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return result;
    }
  }, [products, query, filter]);

  const handleSearch = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleSort = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  const handlePageClick = useCallback((pageNo) => {
    setCurrentPage(pageNo);
  }, []);

  return (
    <div className="bg-white px-4 md:px-8 lg:px-12 xl:px-20 mx-auto my-12 py-5 max-w-7xl">
      <div className="flex flex-col md:flex-row pb-8 pt-12 items-center gap-4 md:gap-12">
        <div className="bg-white p-4 w-full md:w-4/5">
          <input
            className="w-full border-2 border-gray-400 p-2 rounded"
            placeholder="Search for products"
            onChange={handleSearch}
            value={query}
            aria-label="Search for products"
          />
        </div>
        <div className="w-full md:w-auto">
          <select
            onChange={handleSort}
            name="filter"
            id="filter"
            className="bg-gray-100 pr-6 py-2 text-gray-500 w-full md:w-auto rounded"
            value={filter}
            aria-label="Sort products"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full">
        <ProductCard products={filteredAndSortedProducts} />
      </div>
      <div className="flex my-20 pl-8">
        {[1, 2, 3].map((pageNo) => (
          <Page
            key={pageNo}
            pageNo={pageNo}
            link="#"
            currentPage={currentPage}
            onPageClick={handlePageClick}
          />
        ))}
        <Page pageNo="..." link="#" currentPage={currentPage} onPageClick={() => {}} />
      </div>
    </div>
  );
}

export default ProductList;