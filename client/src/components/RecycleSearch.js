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
            <div class="w-full flex items-center justify-center mt-8">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="검색어를 입력하세요."
                class="w-[550px] h-[50px] rounded-[40px] border-2 border-black p-4"
            />
            <button onClick={searchRecycle} class="inline w-[120px] h-[55px] ml-[20px] rounded-md bg-gray-50 px-2 py-1  text-[15px] font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">검색</button>
            </div>
            
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
