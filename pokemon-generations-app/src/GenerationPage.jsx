import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
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
            <h1 className="generationsTitle">Pokemon Species in {id.toUpperCase()}</h1>
            {generationsData ? (
                <div className="cardContainer">
                    {generationsData.pokemon_species.map((species) => (
                        <Card className='generationsCard' key={species.name} imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.url.split('/')[6]}.png`}>
                            <h2 className="speciesCard" key={species.name}>{species.name.toUpperCase()}</h2>
                        </Card>
                    ))}
                </div>
            ) : (
                <p>Loading Species...</p>
            )}
        </div>
    )
}

export default GenerationPage;