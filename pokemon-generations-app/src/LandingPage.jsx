import React, { useState, useEffect} from "react";
import { Link, Route } from 'react-router-dom';
import Card from "./Card";
import './LandingPage.css';
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
            <h1 className="generationsTitle">Pokemon Generations</h1>
            {generationsData ? (
                <div className="cardContainer">
                    {generationsData.results.map((generation) => (
                        <Card key={generation.name}>
                            <Link className="generationsCard" to={`/generation/${generation.name}`}>
                                {generation.name.toUpperCase()}
                            </Link>
                        </Card>
                    ))}
                </div>
            ) : (
                <p>Loading Generations...</p>
            )}
        </div>
    )
}

export default LandingPage;