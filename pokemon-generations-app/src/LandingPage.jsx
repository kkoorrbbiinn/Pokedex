import React, { useState, useEffect} from "react";
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

const LandingPage = () => {
    const [generationsData, setGenerationsData] = useState(null);

    useEffect(() => {
        const fetchGenerationData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/generation/');
                setGenerationsData(response.data);
            } catch (error) {
                console.error('Error getting Generation Data: ', error)
            }
        };

        fetchGenerationData();

    }, []);

    return (
        <div>
            <h1>Pokemon Generations</h1>
            {generationsData ? (
                <div>
                    {generationsData.results.map((generation) => (
                        <h1 key={generation.name}>
                            <Link to={`/generation/${generation.name}`}>
                                {generation.name.toUpperCase()}
                            </Link>
                        </h1>
                    ))}
                </div>
            ) : (
                <p>Loading Generations...</p>
            )}
        </div>
    )
}

export default LandingPage;