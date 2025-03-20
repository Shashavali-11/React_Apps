import { useState } from "react";
import { Container, Button, Table, Form } from "react-bootstrap";

const ItemList = ({ items, deleteItem, updateItem }) => {
  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleUpdate = (id, title) => {
    setEditId(id);
    setNewTitle(title);
  };

  const handleSave = (id) => {
    updateItem(id, newTitle);
    setEditId(null);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Items List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editId === item.id ? (
                  <Form.Control
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                ) : (
                  item.title
                )}
              </td>
              <td>
                {editId === item.id ? (
                  <Button variant="success" size="sm" className="me-4" onClick={() => handleSave(item.id)}>
                    Save
                  </Button>
                ) : (
                  <Button variant="warning" size="sm" className="me-4" onClick={() => handleUpdate(item.id, item.title)}>
                    Update
                  </Button>
                )}
                <Button variant="danger" size="sm" onClick={() => deleteItem(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ItemList;
