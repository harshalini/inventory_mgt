import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export const Home = () => {
    const products = [
        {
            id: 1,
            product: "Wafers",
            price: 10,
            quantity: 20,
            md: "29/01/23",
            ed: "29/07/23"
        },
        {
            id: 2,
            product: "Wafers",
            price: 10,
            quantity: 20,
            md: "29/01/23",
            ed: "29/07/23"
        },
        {
            id: 3,
            product: "Wafers",
            price: 10,
            quantity: 20,
            md: "29/01/23",
            ed: "29/07/23"
        },
        {
            id: 4,
            product: "Wafers",
            price: 10,
            quantity: 20,
            md: "29/01/23",
            ed: "29/07/23"
        },
        {
            id: 5,
            product: "Wafers",
            price: 10,
            quantity: 20,
            md: "29/01/23",
            ed: "29/07/23"
        },
        {
            id: 6,
            product: "Wafers",
            price: 10,
            quantity: 20,
            md: "29/01/23",
            ed: "29/07/23"
        }
    ]
    const [invProducts, setinvProducts] = useState(products);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState();
    const [productQty, setProductQty] = useState();
    const [productMfg, setProductMfg] = useState();
    const [productExp, setProductExp] = useState();
    return (
        <div>
            
            <div className='home-flex'>
                <div className='product-form'>
                    <h2>Add New Product</h2>
                    <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setinvProducts([...invProducts, 
                        {
                            id: products.length + 1,
                            product: productName,
                            price: productPrice,
                            quantity: productQty,
                            md: productMfg,
                            ed: productExp
                        }])
                        console.log(products)
                    }}
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" 
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter product price" 
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Quantity</Form.Label>
                            <Form.Control type="text" placeholder="Enter product quantity" 
                            value={productQty}
                            onChange={(e) => setProductQty(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mfg Date</Form.Label>
                            <Form.Control type="text" placeholder="Enter product quantity" 
                            value={productMfg}
                            onChange={(e) => setProductMfg(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control type="text" placeholder="Enter product quantity" 
                            value={productExp}
                            onChange={(e) => setProductExp(e.target.value)}
                            />
                        </Form.Group>

                        
                        <Button variant="primary" type="submit">
                            ADD
                        </Button>
                    </Form>
                </div>
                <div className='product-flex'>
                    {invProducts.map((p) => (
                        <Card style={{ width: '18rem' }} className='product-card' key={p.id}>
                            <Card.Body className='card-body'>
                                <div>
                                <Card.Title>{p.product}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Rs. {p.price}</Card.Subtitle>
                                <Card.Text>
                                    Lays Salted Chips
                                </Card.Text>
                                <Card.Text className='p-dates'>
                                <span>Qty {p.quantity}</span>
                                <span>Mfg date: {p.md}</span>
                                <span>Expiry date: {p.ed}</span>
                                </Card.Text>
                                </div>
                                <div className='card-design'>
                                   
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    )
}