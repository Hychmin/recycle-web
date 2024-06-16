import React, { useState } from 'react';
import axios from 'axios';

const RecycleSearch = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);

    const searchRecycle = async () => {
        try {
            const response = await axios.get(`/api/recycle?query=${query}`);
            setResult(response.data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for recyclable item"
            />
            <button onClick={searchRecycle}>Search</button>
            {result && (
                <div>
                    <h3>Results:</h3>
                    <p>Name: {result.name}</p>
                    <p>Description: {result.description}</p>
                </div>
            )}
        </div>
    );
};

export default RecycleSearch;
