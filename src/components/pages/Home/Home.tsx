import React from 'react';
import ResidentForm from '../../molecules/ResidentForm/ResidentForm';
import './Home.scss';

const Home: React.FC<{ onRegister: (resident: any) => void }> = ({ onRegister }) => {
    return (
        <div className="home">
            <h1>Registro de Residentes</h1>
            <ResidentForm onRegister={onRegister} />
        </div>
    );
};

export default Home;
