import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GenerationPage = () => {
    const { id } =useParams();
    const [generationsData, setGenerationsData] = useState(null);

    useEffect(() => {
        const fetchGenerationData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/generation/${id}`);
                setGenerationsData(response.data);
            } catch (error) {
                console.error('Error getting Generation Data: ', error);
            }
        };

        fetchGenerationData();

    }, [id]);

    return (
        <div>
            <h1>Pokemon Species in {id.toUpperCase()}</h1>
            {generationsData ? (
                <div>
                    {generationsData.pokemon_species.map((species) => (
                        <h2 key={species.name}>{species.name}</h2>
                    ))}
                </div>
            ) : (
                <p>Loading Species...</p>
            )}
        </div>
    )
}

export default GenerationPage;