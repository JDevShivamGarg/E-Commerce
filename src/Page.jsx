import React from 'react';

function Page({ pageNo, link, currentPage, onPageClick }) {
  return (
    <button
      className={`border-red-500 text-base border mx-2 h-8 w-8 text-center flex items-center justify-center hover:text-white hover:bg-red-500 ${currentPage === pageNo ? 'bg-red-500 text-white' : 'text-red-500'}`}
      onClick={(e) => {
        e.preventDefault(); 
        onPageClick(pageNo); 
      }}
    >
      {pageNo}
    </button>
  );
}

export default Page;
