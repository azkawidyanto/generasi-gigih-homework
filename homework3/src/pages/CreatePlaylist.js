import { useSelector } from 'react-redux'
import Track from '../components/Track'
import PlaylistForm from '../components/PlaylistForm'

const CreatePlaylist = () => {
  const { tracks } = useSelector(state => state.playlist)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '5vw' }}>
      <div>
        <h2>Tracks</h2>
        {tracks.map(track => (
          <Track track={track} key={track.id} />
        ))}
      </div>
      <PlaylistForm />
    </div>
  )
}

export default CreatePlaylist
