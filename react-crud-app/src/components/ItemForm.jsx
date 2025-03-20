import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const ItemForm = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ title });
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h2>Add New Item</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Button variant="success" type="submit">Add Item</Button>
      </Form>
    </Container>
  );
};

export default ItemForm;
