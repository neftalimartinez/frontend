import React, { useEffect, useState } from 'react'
import Navigation from '../layout/Navigation'
import { getVideogames } from './apiCore';
import Card from './Card';

const Home = (req, res) => {
    const [videogames, setVideogames] = useState([]);
    const [error, setError] = useState(false)

    const loadVideoGames = () => {
        getVideogames().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setVideogames(data);
            }
        })
    }

    //dice que funcion ejecutar primero
    useEffect(() => {
        loadVideoGames();
    }, [])

    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="row">
                    {videogames.map((videogame, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                            <Card videogame={videogame} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;