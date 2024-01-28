import React from 'react'
import '../../App.css'
import ParticleBackground from '../ParticleBackground';
import ResultSection from '../ResultSection';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Toothless  from '../Toothless';
import './ResultsPage.css';

export default function ResultsPage({response, setResponse}) {
    return(
        // <h1 className='results'>RESULTS</h1>
        <>
            <ParticleBackground />
            <div className='results-container'>
                <Canvas className = 'canvas'>
                    <Suspense fallback={null}>
                    <Toothless />
                    <OrbitControls />
                    </Suspense>
                </Canvas>
                <ResultSection className = 'results-section' response={response} setResponse={setResponse}/>
                
            </div>
            
        </>
    ); 
}

