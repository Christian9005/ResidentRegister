import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import './AccessControl.scss';

interface Visitor {
    name: string;
    reason: string;
    contact: string;
}

const AccessControl: React.FC = () => {
    const [visitor, setVisitor] = useState<Visitor>({ name: '', reason: '', contact: '' });
    const [visitorsList, setVisitorsList] = useState<Visitor[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVisitor((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setVisitorsList((prev) => [...prev, visitor]);
        setVisitor({ name: '', reason: '', contact: '' });
    };

    return (
        <div className="access-control">
            <h2>Control de Acceso</h2>
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Nombre del visitante" value={visitor.name} onChange={handleChange} required />
                <Input type="text" placeholder="Razón de la visita" value={visitor.reason} onChange={handleChange} required />
                <Input type="text" placeholder="Número de contacto" value={visitor.contact} onChange={handleChange} required />
                <Button type="submit">Registrar Visita</Button>
            </form>
            <ul>
                {visitorsList.map((v, index) => (
                    <li key={index}>{v.name} - {v.reason}</li>
                ))}
            </ul>
        </div>
    );
};

export default AccessControl;
