import { useAuth } from '../libs/useAuth'

const Homepage = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <p>You are authorized</p>
  ) : (
    <div
      style={{
        display: 'grid',
        marginTop:"20px",
        placeItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10
      }}
    >
      <p>
        Mini Spotify Playlist
      </p>
    </div>
  )
}

export default Homepage
