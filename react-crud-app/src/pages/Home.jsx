import ItemList from "../components/ItemList";

const Home = ({ items, deleteItem, updateItem }) => <ItemList items={items} deleteItem={deleteItem} updateItem={updateItem} />;

export default Home;
