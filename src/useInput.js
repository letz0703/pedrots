import {useState} from "react";

export function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = () => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange];
}
