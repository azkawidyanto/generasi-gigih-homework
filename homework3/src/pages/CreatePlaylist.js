import { useSelector } from 'react-redux'
// import Track from '../components/Track'
import Track from '../components/Track/track.tsx'
import PlaylistForm from '../components/PlaylistForm'

import React from 'react'

 
const CreatePlaylist = () => {


  const { tracks } = useSelector(state => state.playlist)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', columnGap: '5vw' }}>
      <div>
        <h2 style={{placeItems: 'center'}}>Tracks</h2>
        {tracks.map(track => (
          <Track track={track} key={track.id} />
        ))}
      </div>
      <PlaylistForm />
    </div>
  )
}

export default CreatePlaylist
