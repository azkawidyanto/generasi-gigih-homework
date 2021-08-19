import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button} from "@chakra-ui/button";
import style from './style.module.css'
// import { FaSpotify } from 'react-icons/fa'
// import { FiSearch } from 'react-icons/fi'
import { authorize, getTracks } from '../../api/spotifyAPI'
import { useSelector, useDispatch } from 'react-redux'
import { setTracks } from '../../store/playlist'
import { Input } from "@chakra-ui/react"

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
        <Link to='/' > Spotify</Link>
      </div>
      <form className={style.search} onSubmit={handleSubmit}> 
      <Input
      size="sm"
       variant="flushed"
       type="text"
       name="query"
       placeholder="Search..."
       onChange={e => setQuery(e.target.value)}
       value={query}
        />

        <Button onClick={handleSubmit} colorScheme="black" variant="solid" ml="5" mr="5" >
          Search
        </Button>
      </form>
      <div className={style.user}>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-playlist">
                Create Playlist
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <span><strong>{user.display_name}</strong></span>
            ) : (
              <Button onClick={authorize}colorScheme="black" variant="solid" ml="5" mr="5">
                Login 
              </Button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
