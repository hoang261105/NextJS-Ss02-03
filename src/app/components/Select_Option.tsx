"use client"
import React, { useState } from 'react'

type Option = {
    value: number | string;
    label: string;
  };
  
  type B11Props = {
    options: Option[];
    handleChange: (option: Option) => void;
  };

export default function B11({options, handleChange}: B11Props) {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: Option) => {
    setSelectedOption(option);
    handleChange(option);
    setIsOpen(false);
  };

  return (
    <div className="select-container">
      <div className="select-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Select an option"}
        <span className="dropdown-icon">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className="select-list">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => onOptionClicked(option)}
              className={option.value === selectedOption?.value ? "active" : ""}
            >
              {option.label}
              {option.value === selectedOption?.value && <span className="active-icon">✔</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
