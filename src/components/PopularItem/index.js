import {Link} from 'react-router-dom'
import './index.css'

const PopularItem = props => {
  const {itemDetails} = props
  const {posterPath, title, id} = itemDetails

  return (
    <li className="li-container">
      <Link to={`/movies/${id}`}>
        <img
          src={posterPath}
          alt={title}
          className="tending-movie-poster-path"
        />
      </Link>
    </li>
  )
}

export default PopularItem
