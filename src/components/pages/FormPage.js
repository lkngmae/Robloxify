import React from 'react';
import '../../App.css';
import Form from '../Form';
import ParticleBackground from '../ParticleBackground';

function FormPage() {
    console.log("Made it to form!");
    return (
        <>
            <Form />
            <ParticleBackground />
        </>
    );
}

export default FormPage;