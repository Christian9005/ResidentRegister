import React, { useState } from 'react';
import AccessControl from '../../organisms/AccessControl/AccessControl';
import Statistics from '../../organisms/Statistics/Statistics';
import './Dashboard.scss';

const Dashboard: React.FC<{residents: any[]}> = ({residents}) => {
    const [visitors, setVisitors] = useState<any[]>([]);

    const addVisitor = (visitor: any) => {
        setVisitors((prev) => [...prev, visitor]);
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <AccessControl />
            <Statistics visitors={visitors} />
            <div>
                <h2>Residentes Registrados</h2>
                <ul>
                    {residents.map((resident, index) => (
                        <li key={index}>
                            {resident.name} - {resident.id} - {resident.plate}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
