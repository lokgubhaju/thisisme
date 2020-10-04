import { useState, useEffect } from 'react';

const useLocalStorage = localStorageKey => {
    const [value, setValue] = useState(
      localStorage.getItem(localStorageKey) || ''
    );
   
    useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [localStorageKey, value]);

    return [value, setValue];
};

export default useLocalStorage;