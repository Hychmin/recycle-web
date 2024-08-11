// client/src/App.js
import React from 'react';
import RecycleSearch from './components/RecycleSearch';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <nav class="w-full h-[45px] bg-green-700">
                <h1 class="text-white text-[20px]  h-full justify-center flex items-center">Recycle Item Search</h1>
                </nav>
                <RecycleSearch />
            </header>
        </div>
    );
}

export default App;
