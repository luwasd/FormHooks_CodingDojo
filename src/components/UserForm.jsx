import React from 'react';


const UserForm = ({datos, setDatos, limpiar}) => {


    const { name, lastname, email, password, cfpassword } = datos;

    /* const createUser = (e) => {
         e.preventDefault();
         const newUser = { username, email, password };
         console.log("Welcome", newUser);
     };*/

    const handleDatos = (e) => {
        setDatos({
            ...datos, [e.target.name]: e.target.value,
        });
    }


    return (
        <form>
            <div>
                <label>Name: </label>
                <input value={name} name="name" type="text" onChange={handleDatos} />
            </div><br />
            <div>
                <label>Lastname: </label>
                <input value={lastname} name="lastname" type="text" onChange={handleDatos} />
            </div><br />
            <div>
                <label>Email Address: </label>
                <input value={email} name="email" type="text" onChange={handleDatos} />
            </div><br />
            <div>
                <label>Password: </label>
                <input value={password} name="password" type="password" onChange={handleDatos} />
            </div><br />
            <div>
                <label>Confirm Password: </label>
                <input value={cfpassword} name="cfpassword" type="password" onChange={handleDatos} />
            </div><br />
            <button type='button' onClick={limpiar}>Limpiar</button>
        </form>
    );
};

export default UserForm;
