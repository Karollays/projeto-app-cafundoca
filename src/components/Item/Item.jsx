import React from 'react';
import './Item.css';
function Item(props) {
  const { texto, width, height, onClick, id, type } = props;
  return (
    <div className="itemContainer">
      <button
        id={id}
        type={type}
        style={{ width: width || '100%', height: height || '2.5rem' }}
        className="btn"
        onClick={onClick}
      >
        {texto}
      </button>
    </div>
  );
}

export default Item;
