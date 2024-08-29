import React, { useState } from 'react';

const ClienteSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border w-full"
                placeholder="Buscar por nome ou CPF"
            />
            <button onClick={handleSearch} className="bg-green-500 text-white px-4 py-2 mt-2">Buscar</button>
        </div>
    );
};

export default ClienteSearch;
