import React from "react";

function Pagination({
  totalProducts,
  productPerPage,
  setCurrentPage,
  currentPage,
}) {
  const totalPages = Math.ceil(totalProducts / productPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="store-pagination" aria-label="Product pages">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-control"
        aria-label="Previous page"
      >
        <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`pagination-control ${page === currentPage ? "is-current" : ""}`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-control"
        aria-label="Next page"
      >
        <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </button>
    </nav>
  );
}

export default Pagination;