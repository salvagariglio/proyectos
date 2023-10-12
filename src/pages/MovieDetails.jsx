import { useParams } from 'react-router-dom'
import {get} from '../data/httpClient'
import { useEffect, useState } from 'react'
import {getMovieImg} from '../utils/getMovieImg'
import './MovieDetails.css'

export function MovieDetails(){
    const {movieId}= useParams
    const [movie, setMovie]= useState([]);
    const [generos, setGeneros]= useState([]);
    useEffect(()=>(
        get("/movie/"+movieId).then((data)=>{
            setMovie(data)
            setGeneros(data.genres)
            console.log(data)
        })
    ),[movieId])
    const imageUrl= getMovieImg(movie.poster_path, 500)
    return (
        <div className='detailsContainer'>
            <img className="col movieImage" src={imageUrl}
                alt={movie.title}/>
            <div className="col movieDetails">
                <p className="movieTitle">
                    <strong>Title:</strong>
                    {movie.title}
                </p>
                <p className="">
                    <strong>Gender:</strong>
                    {generos.name}
                </p>
                <p>
                    <strong> Description:</strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}