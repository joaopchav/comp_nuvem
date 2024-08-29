import React, { useState } from 'react';
import ClienteForm from './ClienteForm';
import ClienteList from './ClienteList';
import ClienteSearch from './ClienteSearch';

const App = () => {
    const [clientes, setClientes] = useState([]);

    const handleAddCliente = (cliente) => {
        setClientes([...clientes, cliente]);
    };

    const handleDeleteCliente = (cpf) => {
        setClientes(clientes.filter(cliente => cliente.cpf !== cpf));
    };

    const handleSearchCliente = (searchTerm) => {
        // Lógica de busca (pode ser implementada para buscar via backend)
        console.log('Buscando:', searchTerm);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cadastro de Clientes</h1>
            <ClienteForm onSubmit={handleAddCliente} />
            <ClienteSearch onSearch={handleSearchCliente} />
            <ClienteList clientes={clientes} onDelete={handleDeleteCliente} />
        </div>
    );
};

export default App;
