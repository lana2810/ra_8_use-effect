import React from "react";

function List({ list, onClick }) {
  return (
    <ul className="list">
      {list.map((item) => (
        <li
          key={item.id}
          className="list-item"
          onClick={() => onClick(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
