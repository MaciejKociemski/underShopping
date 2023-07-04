import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { selectProducts } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';
import { selectCart } from '../store/cartSlice';
import css from '../components/App.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Col md={4} className="mb-4">
      <Card className={css.card}>
        <Card.Body>
          <Card.Title className={css.card}>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
          <Button
            variant="primary"
            onClick={handleAddToCart}
            className="custom-button"
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Cart = () => {
  const cartItems = useSelector(selectCart);
console.log(cartItems)
  return (
    <div>
      <h2 className="my-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.cartItemId}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  const products = useSelector(selectProducts);

  return (
    <Container>
      <h1 className="my-4">Simple Store</h1>
      <Row>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
      <Cart />
    </Container>
  );
};

export default App;
