import React from 'react'
import '../../App.css'
import ParticleBackground from '../ParticleBackground';
import ResultSection from '../ResultSection';

export default function ResultsPage({response, setResponse}) {
    return(
        // <h1 className='results'>RESULTS</h1>
        <>
            <ResultSection response={response} setResponse={setResponse}/>
            <ParticleBackground />
         </>
    ); 
}

