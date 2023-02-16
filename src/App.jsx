import React, { useState } from 'react';
import ShowData from './components/ShowData';
import UserForm from './components/UserForm';


function App() {

    const initialValues = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        cfpassword: ''
    }

    const [datos, setDatos] = useState(initialValues);

    const limpiar = (e) => {
        setDatos(initialValues);
    }

    return (
        <>
            <UserForm
                datos={datos}
                setDatos={setDatos}
                limpiar={limpiar}
            />
            <ShowData
                datos={datos}
                setDatos={setDatos}
            />
        </>
    );
}

export default App;