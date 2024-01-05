import './PageNotFound.css'
import PageNotFoundImage from '../../assets/404PageNotFound.avif'

export function PageNotFound () {
  return (
    <div className='pageNotFound'>
      <img src={PageNotFoundImage} alt='404 Error page not found image' />
      <strong>Here comes a text </strong>
    </div>
  )
}
