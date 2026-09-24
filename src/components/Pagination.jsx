import React from 'react'


function Pagination({ totalProducts, productPerPage, setCurrentPage,currentPage }) {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pages.push(i)
    }

    return (
        <div>
            <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1} className='btn mx-3 border border shadow rounded-5 px-3 py-0 text-primary'>
                <i class="fa-solid fa-backward"></i>
            </button>
            {
                pages?.map(page => (
                    <button onClick={() => setCurrentPage(page)} className={`btn mx-3 border border shadow rounded-5 px-3 py-0  ${page==currentPage? 'btn-primary' : 'btn-light'}`}>{page}</button>
                ))
            }
            <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage==pages?.length} className='btn mx-3 border border shadow rounded-5 px-3 py-0 text-primary'>
                <i class="fa-solid fa-forward"></i>
            </button>
        </div>
    )
}

export default Pagination