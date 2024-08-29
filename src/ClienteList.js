import React from 'react';

const ClienteList = ({ clientes, onDelete }) => {
    return (
        <div className="mt-4">
            <h2 className="text-lg font-bold">Clientes Cadastrados</h2>
            <ul className="space-y-2">
                {clientes.map((cliente) => (
                    <li key={cliente.cpf} className="flex justify-between items-center">
                        <span>{cliente.nome} - {cliente.cpf}</span>
                        <button onClick={() => onDelete(cliente.cpf)} className="bg-red-500 text-white px-4 py-1">Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClienteList;
