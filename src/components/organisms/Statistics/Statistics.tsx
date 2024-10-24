import React from 'react';
import './Statistics.scss';

const Statistics: React.FC<{ visitors: any[] }> = ({ visitors }) => {
    return (
        <div className="statistics">
            <h2>Estadísticas</h2>
            <p>Total de visitas: {visitors.length}</p>
        </div>
    );
};

export default Statistics;