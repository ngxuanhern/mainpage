import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-bold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-200 hover:text-gray-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;