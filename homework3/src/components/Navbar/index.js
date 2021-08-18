import { useState } from 'react'
import Link from '../Link'
import { Button} from "@chakra-ui/button";
import style from './style.module.css'
// import { FaSpotify } from 'react-icons/fa'
// import { FiSearch } from 'react-icons/fi'
import { authorize, getTracks } from '../../libs/spotifyAPI'
import { useSelector, useDispatch } from 'react-redux'
import { setTracks } from '../../store/playlist'

const Navbar = () => {
  const [query, setQuery] = useState('')
  
  const { isAuthenticated, accessToken, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    if (!query) alert('Please input the query')
    getTracks(accessToken, {
      q: query,
      type: 'track',
      limit: 12,
    }).then(res => dispatch(setTracks(res.tracks.items)))
  }

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link to='/' >Search and Playlist Spotify</Link>
      </div>
      <form className={style.search} onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
        <Button onClick={handleSubmit} colorScheme="blue" variant="solid" mr="5" >
          Search
        </Button>
      </form>
      <div className={style.user}>
        {isAuthenticated ? (
          <span>Hello <strong>{user.display_name}</strong></span>
        ) : (
          <Button onClick={authorize}colorScheme="blue" variant="solid" mr="5">
            Login 
          </Button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
