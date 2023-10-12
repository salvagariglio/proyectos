import placeholder from '../img/placeholder.png'
//falta extraer la img de flaticon
export function getMovieImg(path, width){
    return path? `https://image.tmdb.org/t/p/w${width}${path}`:placeholder
}
