import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const HomeProductos = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");
            //console.log(token);

            if (!token) {
                navigate("/login");
            }
        }

        autenticarUsuario()
    }, [navigate]); // [] Hacen que solo se ejecute una vez el useEffect


    return (
        <>
        <Header/>
        <div className='md:flex md:min-h-screen'>
            <Sidebar/>
            <main className= 'flex-1'>
                <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                    Listado de Productos
                </h1>
            </main>
        </div>
        </>
    );
}

export default HomeProductos;