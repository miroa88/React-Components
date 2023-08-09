import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';

const AutocompleteTextField = ({
  options,
  initialValue,
  setInputValueOnSelect,
  setInputValueOnChange,
  placeholder,
  style
}) => {
  
  const [inputValue, setInputValue] = useState(initialValue || '');

  useEffect(() => {
    if (setInputValueOnChange) {
      setInputValueOnChange(inputValue);
    }
    if (setInputValueOnChange) {
      setInputValueOnChange(inputValue);
    }
  }, [])

  const handleSelect = (value) => {
    setInputValue(value)
    if (setInputValueOnSelect) {
      setInputValueOnSelect(value);
    }
  };

  const handleChange = (value) => {
    setInputValue(value)
    if (setInputValueOnChange) {
      setInputValueOnChange(value);
    }
  };

  const filterDataSource = (arr, target) => {
    if (target === '') {
      return arr;
    }
    const lowercaseTarget = target.toLowerCase();
    return arr.filter(str => str.toLowerCase().startsWith(lowercaseTarget));
  }

  return (
    <AutoComplete
      value={inputValue}
      dataSource={filterDataSource(options, inputValue)}
      style={style}
      onSelect={handleSelect}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default AutocompleteTextField;