// eslint-disable-next-line no-unused-vars
import {React, useEffect, useState } from 'react';
import "./classSearchBar.css"

export const ClassSearchBar = ({ setResults, uniID }) => {
    const [input, setInput] = useState("");

    

    
    const fetchData = async (value) => {
            const response = await fetch(`https://classmate-backend-h16a.onrender.com/uni/${uniID}/allclasses`);
            const json = await response.json();
            const result = json.filter((course) => {
                return course && value &&
                course.FullName && 
                course.FullName.toLowerCase().includes(value.toLowerCase());
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
                placeholder="Search Class..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
        </div>
        
    );
}

