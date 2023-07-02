import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    description: 'This is a product description.',
  },
];

const App = () => {
  return (
    <Container>
      <h1 className="my-4">Simple Store</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
