import './Movies.css'
import { Link } from 'react-router-dom'

const urlImage = 'https://image.tmdb.org/t/p/w500'

export function Movies ({ movies }) {
  return (
    <div className='movieContainer'>
      {
       movies && movies.length > 0
         ? (
             movies.map((movie, index) => {
               return (
                 <div
                   className='movie'
                   key={movie.id}
                 >
                   <Link to={`/search-page/movies/${movie.id}`}>
                     <img
                       src={urlImage + movie.poster_path}
                       width={200}
                       alt={movie.title}
                     />
                   </Link>
                   <h3>{movie.title}</h3>
                 </div>
               )
             })
           )
         : null
    }
    </div>

  )
}
