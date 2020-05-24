import {useState} from 'react';

export const useLocalStorage = (key, initialValue) =>{

  const [storedValue, setStoredValue] = useState(()=>{
    //geting from local storage using key as the value
    const item = window.localStorage.getItem(key);
    //using a one line if statement to return a json or initial value
    return item ? JSON.parse(item) : initialValue;
  });

  //setter function to be returned in the final array
  const setValue = value =>{
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}
