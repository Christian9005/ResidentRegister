import React, { useState } from 'react';
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
import LoginForm from './components/molecules/LoginForm/LoginForm';
import './App.css';

interface Resident {
  name: string;
  id: string;
  plate: string;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [residents, setResidents] = useState<Resident[]>([]);


  const handleRegister = (resident: any) => {
    console.log('Residente registrado: ', resident);
    setResidents((prev) => [...prev, resident]);
  };

  return (
    <div>
      {isAuthenticated ? (
                <Dashboard residents={residents}/>
            ) : (
                <LoginForm onLogin={() => setIsAuthenticated(true)} />
            )}
            <Home onRegister={handleRegister} />
    </div>
  );
}

export default App;
