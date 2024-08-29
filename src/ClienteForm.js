import React, { useState } from 'react';

const ClienteForm = ({ onSubmit }) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nome, cpf, dataNascimento, email });
        setNome('');
        setCpf('');
        setDataNascimento('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full p-2 border" />
            </div>
            <div>
                <label className="block">CPF</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} className="w-full p-2 border" />
            </div>
            <div>
                <label className="block">Data de Nascimento</label>
                <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="w-full p-2 border" />
            </div>
            <div>
                <label className="block">E-mail</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Cadastrar Cliente</button>
        </form>
    );
};

export default ClienteForm;
