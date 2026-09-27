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
    <div className="d-flex justify-content-center align-items-center flex-wrap gap-1 gap-sm-2 my-3">

      {/* Previous */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn border shadow rounded-5 px-2 px-sm-3 py-1 text-primary"
      >
        <i className="fa-solid fa-backward"></i>
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`btn border shadow rounded-5 px-2 px-sm-3 py-1 ${
            page === currentPage ? "btn-primary" : "btn-light"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn border shadow rounded-5 px-2 px-sm-3 py-1 text-primary"
      >
        <i className="fa-solid fa-forward"></i>
      </button>

    </div>
  );
}

export default Pagination;