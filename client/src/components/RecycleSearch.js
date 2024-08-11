import React, { useState } from 'react';
import axios from 'axios';

const RecycleSearch = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const searchRecycle = async () => {
        setError(''); // 이전 에러 메시지를 초기화
        setResult(null); // 이전 결과를 초기화
        try {
            const response = await axios.get(`http://localhost:5001/api/recycle?query=${query}`);
            
            if (response.data.error) {
                // API에서 오류 메시지가 반환된 경우
                setError(response.data.error);
            } else {
                // 데이터가 존재할 경우
                setResult(response.data);
            }
        } catch (error) {
            if (error.response) {
                // HTTP 오류 발생 시
                if (error.response.status === 404) {
                    // 404 오류가 발생한 경우
                    setError('해당 결과가 없습니다.');
                } else {
                    // 기타 HTTP 오류 처리
                    setError('서버에서 오류가 발생했습니다.');
                }
            } else {
                // 네트워크 오류 처리
                setError('데이터를 가져오는 중 오류가 발생했습니다.');
            }
        }
    };

    return (
        <div>
            <div className="w-full flex items-center justify-center mt-8">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="검색어를 입력하세요."
                    className="w-[550px] h-[50px] rounded-[40px] border-2 border-black p-4"
                />
                <button onClick={searchRecycle} className="inline w-[120px] h-[55px] ml-[20px] rounded-md bg-gray-50 px-2 py-1 text-[15px] font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    검색
                </button>
            </div>

            {error && (
                <div className="mt-4 text-red-500">
                    {error}
                </div>
            )}

            {result && !error && (
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
