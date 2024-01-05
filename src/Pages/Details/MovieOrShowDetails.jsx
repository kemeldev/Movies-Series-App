import { useParams, useLocation } from 'react-router-dom'

const urlaBackgroundImage = 'https://image.tmdb.org/t/p/w1280'

const urlPosterImage = 'https://image.tmdb.org/t/p/w500'

export function MovieOrShowDetails () {
  const { id } = useParams()
  const numericId = parseInt(id)

  const { state } = useLocation()
  const { dataToRender } = state || {}

  console.log('Data to render', dataToRender)
  console.log('id', id, typeof (numericId))

  const cardToRender = dataToRender?.find(card => card.id === numericId)

  console.log(cardToRender)

  return (
    <div className='movieDetails'>
      {dataToRender
        ? (
          <>
            <h3>{cardToRender.title}</h3>
            <strong>{cardToRender.overview}</strong>
            <img src={urlPosterImage + cardToRender.poster_path} height={200} alt={cardToRender.title} />
            <img src={urlaBackgroundImage + cardToRender.backdrop_path} height={500} alt={cardToRender.title} />
          </>
          )
        : (
          <p>Loading...</p>
          )}
    </div>
  )
}
