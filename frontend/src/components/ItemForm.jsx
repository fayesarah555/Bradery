import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createItem } from '../features/items/itemSlice';

function ItemForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createItem({ name, description, price }));
    // Reset the form fields
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Item</label>
          <input
            type="text"
            name="name"
            placeholder="Item name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Item description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            placeholder="Item price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
}

export default ItemForm;
