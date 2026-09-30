import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/ProductSlice';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';






function Landing() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const { loading, allProducts, error } = useSelector(state => state.product)
    console.log(loading, allProducts, error);
    const [currentPage, setCurrentPage] = useState(1)
    const cardPerPage = 8
    let endingIndex = currentPage * cardPerPage
    let startingIndex = endingIndex - cardPerPage
    if(startingIndex > allProducts.length){
        setCurrentPage(1)
    }
    let currentProduct = allProducts.slice(startingIndex, endingIndex)




    return (
        <div>
            <Header insidelanding={true} />
            {
                loading ?
                    <div className="loading-state" role="status">
                        <Spinner animation="border" variant="success" />
                        <span>Loading products...</span>
                    </div>
                    :

                    <main className="store-page">
                        <header className="page-heading">
                            <div>
                                <p className="page-eyebrow">The shop</p>
                                <h1>Shop all products</h1>
                                <p>Find something you’ll love.</p>
                            </div>
                            <div className="page-count"><strong>{allProducts.length}</strong> products</div>
                        </header>
                        <div className="row g-4 product-grid">
                            {currentProduct?.length > 0 ? (
                                currentProduct.map((pro) => (
                                    <div
                                        className="col-6 col-md-4 col-lg-3"
                                        key={pro.id}
                                    >
                                        <Card className="product-card h-100">
                                            <Card.Img
                                                variant="top"
                                                src={pro.thumbnail}
                                                className="p-3"
                                            />

                                            <Card.Body className="d-flex flex-column">
                                                <Card.Title>
                                                    {pro.title}
                                                </Card.Title>

                                                <Card.Text className="product-price fw-bold">
                                                    ${pro.price}
                                                </Card.Text>

                                                <Link
                                                    to={`/product/${pro.id}/view`}
                                                    variant="primary"
                                                    className="mt-auto btn btn-primary"
                                                >
                                                    View more...
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))
                            ) : (
                                <div className="product-empty">
                                    <span className="empty-state-icon"><i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i></span>
                                    <h2 className="empty-state-title">No products found</h2>
                                    <p className="empty-state-copy">Try a different search to find what you’re looking for.</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <Pagination totalProducts={allProducts?.length} productPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

                        </div>
                    </main>
            }


        </div>
    )
}

export default Landing