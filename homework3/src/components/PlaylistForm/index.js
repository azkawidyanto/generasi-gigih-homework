import React from 'react'
import style from './style.module.css'
import { Button} from "@chakra-ui/button";
import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedTracks, setForm } from '../../store/playlist'
import { postPlaylist, postPlaylistTracks } from '../../api/spotifyAPI'

const PlaylistForm = () => {
  const { accessToken, user } = useSelector(state => state.auth)
  const { selectedTracks, form } = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  const handleFormChanges = e => {
    dispatch(setForm({[e.target.name]: e.target.value}))
  }

  const clearSelection = () => dispatch(clearSelectedTracks())

  const handleSubmit = e => {
    e.preventDefault()
    postPlaylist(accessToken, user.id, {
      name: form.title,
      description: form.description,
      public: false,
    })
      .then(playlist => {
        return postPlaylistTracks(accessToken, playlist.id, {
          uris: selectedTracks,
        })
      })
      .then(() => {
        clearSelection()
        alert('Playlist created')
      })
  }

  return (
    <div className={style.wrapper}>
      <h2>Create Playlist</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          minLength="10"
          onChange={handleFormChanges}
          value={form.title}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          minLength="20"
          onChange={handleFormChanges}
          value={form.description}
        ></textarea>
        <div style={{ textAlign: 'right' }}>
          <Button onClick={clearSelection} type="button" colorScheme="blue" variant="transparent" mr="5" >
            Clear
          </Button>
          <Button onClick={handleSubmit} colorScheme="blue" variant="solid" mr="5" >Create</Button>
        </div>
      </form>
    </div>
  )
}

export default PlaylistForm
