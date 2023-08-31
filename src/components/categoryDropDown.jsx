import React, { useState, useEffect, useRef } from 'react';

const categories = [
    "All Categories",
    "Adventure",
    "Comedy",
    "Fantasy",
    "Horror",
    "Drama",
    "Family",
    "Documentary",
    "Biography",
    "Music",
    "Crime",
    "Thriller",
    "Action",
    "Sci-Fi",
    "Romance",
    "Other",
    "Animation",
    "Mystery",
    "Musical",
    "Sport",
    "History",
    "News"
  ];
  
  function CategoryDropdown({ onSelectCategory }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const selectCategory = (category) => {
      setSelectedCategory(category);
      setIsOpen(false);
      onSelectCategory(category); // Call the callback with the selected category
    };

    // Close the dropdown when a click is detected outside of it
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      if (isOpen) {
        document.addEventListener('click', handleOutsideClick);
      }
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [isOpen]);
  
    return (
      <div ref={dropdownRef} className={`category-dropdown ${isOpen ? 'open' : ''}`}>
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