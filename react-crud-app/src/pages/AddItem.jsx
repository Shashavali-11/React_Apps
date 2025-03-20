import ItemForm from "../components/ItemForm";

const AddItem = ({ addItem }) => {
  return (
    <div>
      <ItemForm addItem={addItem} />
    </div>
  );
};

export default AddItem;
