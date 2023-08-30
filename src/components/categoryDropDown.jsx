import React, { useState } from 'react';

function CategoryDropdown({ categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className={`category-dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedCategory}
      </button>
      <ul className="dropdown-list">
        {categories.map((category, index) => (
          <li key={index} onClick={() => selectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDropdown;
