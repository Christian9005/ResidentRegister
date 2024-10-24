// src/components/molecules/ResidentForm.tsx
import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import './ResidentForm.scss';

interface Resident {
    name: string;
    id: string;
    plate: string;
}

const ResidentForm: React.FC<{ onRegister: (resident: Resident) => void }> = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [plate, setPlate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onRegister({ name, id, plate });
        setName('');
        setId('');
        setPlate('');
    };

    return (
        <form className="resident-form" onSubmit={handleSubmit}>
            <Input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input type="text" placeholder="Número de identificación" value={id} onChange={(e) => setId(e.target.value)} required />
            <Input type="text" placeholder="Placa del vehículo" value={plate} onChange={(e) => setPlate(e.target.value)} required />
            <Button type="submit">Registrar</Button>
        </form>
    );
};

export default ResidentForm;
