import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/albums?_limit=10"
    axios.get(url)
      .then(response => {
        const formattedItems = response.data.map((item, index) => ({
          id: index + 1,
          title: item.title,
        }));
        setItems(formattedItems);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const addItem = (newItem) => {
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { id: newId, title: newItem.title }]);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    const reorderedItems = updatedItems.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    setItems(reorderedItems);
  };

  const updateItem = (id, newTitle) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, title: newTitle } : item
    );
    setItems(updatedItems);
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">React CRUD App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/add" >Add Item</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home items={items} deleteItem={deleteItem} updateItem={updateItem} />} />
        <Route path="/add" element={<AddItem addItem={addItem} />} />
      </Routes>
    </Router>
  );
};

export default App;
