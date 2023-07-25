import React, { useState } from 'react';

const DeleteButtonList = () => {
  // Initialize the state with some example data
  const [listItems, setListItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  // Function to delete an item from the list
  const handleDelete = (index) => {
    const updatedList = [...listItems];
    updatedList.splice(index, 1);
    setListItems(updatedList);
  };

  return (
    <div>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteButtonList;
