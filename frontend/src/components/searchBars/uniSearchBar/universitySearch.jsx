// eslint-disable-next-line no-unused-vars
import {React, useState } from 'react';
import "./universitySearchBar.css"

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    
    const fetchData = async (value) => {
            const response = await fetch("https://classmate-backend-h16a.onrender.com/universities");
            const json = await response.json();
            const result = json.filter((uni) => {
                return uni && value &&
                uni.UniName && 
                uni.UniName.toLowerCase().includes(value.toLowerCase());
            });
           setResults(result); 
    };
        
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='searchBar-container'>
            <div className='searchBar'>
            <input className='textBox'
                type="text"
                placeholder="Search University..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
        </div>
        
    );
}

