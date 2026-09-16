import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/ProductSlice';
import Spinner from 'react-bootstrap/Spinner';



function Landing() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const { loading, allProducts, error } = useSelector(state => state.product)
    console.log(loading, allProducts, error);




    return (
        <div>
            <Header insidelanding={true} />
            {
                loading ?
                    <div className='d-flex justify-content-center align-items-center' style={{minHeight:'100vh'}}>
                        <Spinner animation="grow" variant="warning" />

                    </div>
                    :

                    <div className="container my-5">
    <div className="row g-4">
        {allProducts?.length > 0 ? (
            allProducts.map((pro) => (
                <div
                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                    key={pro.id}
                >
                    <Card className="h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src={pro.thumbnail}
                            className="p-3"
                            style={{
                                height: "220px",
                                objectFit: "contain"
                            }}
                        />

                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                {pro.title.length > 20
                                    ? pro.title.slice(0, 20) + "..."
                                    : pro.title}
                            </Card.Title>

                            <Card.Text className="fw-bold text-success">
                                ${pro.price}
                            </Card.Text>

                            <Button
                                variant="primary"
                                className="mt-auto"
                            >
                                View more...
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))
        ) : (
            <p className="text-center fw-bold fs-2">
                No product found!
            </p>
        )}
    </div>
</div>
            }


        </div>
    )
}

export default Landing