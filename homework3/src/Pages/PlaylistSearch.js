// eslint-disable-next-line
import { useEffect, useState } from "react";
import PlaylistContainer from "../Components/Playlist Container";
import PlaylistForm from "./playlistForm";
import Header from "../Components/header";
// import Datas from '../data'


const PlaylistSearch=(props)=>{
    const [tracks, setTracks] = useState(null);
    const [search, setSearch] = useState('');
    const [trackSelected,setTrackSelected]= useState([]);
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState('')

    useEffect(() => {
      async function fetchData() {
      const user = await fetchFromSpotifyApi(
        'https://api.spotify.com/v1/me',
        props.accessToken
      )
      setUserId(user.id)
      }
      fetchData()
    }, [])

    const postPlaylist = async () => {
      return await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + props.accessToken,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.title,
          description: form.description,
          public: false,
        }),
      }).then(res => res.json())
    }
  
    const addItemToPlaylist = async id => {
      fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + props.accessToken,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          uris: selectedTracks
        }),
      })
    }

    const getSearch = () => { 
        fetch(`https://api.spotify.com/v1/search?q=${search}&type=track`, {
        headers: { Authorization: "Bearer " + props.params.access_token },
        })
        .then((response) => response.json())
        .then((response) => setTracks(response.tracks));
    }

    const getInput=(event)=>{
        setSearch(event.target.value);
    }
    const handleSelect = uri => {
      if (trackSelected.includes(uri)) {
        let newTracks = trackSelected.filter(track => track !== uri)
        setTrackSelected(newTracks)
      } else {
        setTrackSelected([...trackSelected, uri])
      }
    }

  //   const handleChange=(e)=>{
  //     setSearch(e.target.value);
  // }
    // useEffect(() => {
    //   getSearch();
    // });
   const createPlaylist =()=>{
    
   }

  return (
    <div className="homepage">
      <Header />
      <h1 className="Title">Playlist Search</h1>
      <div className="search">
        <input value={search} className="search-input" onChange={(event)=>getInput(event)} type="text" name="search"/>
        <button onClick={getSearch}>
          Search
        </button>
      
      </div>
      <PlaylistForm 
      title={title}
      description={description}
      getInput={getInput}
      createPlaylist={createPlaylist}
      />
          {tracks? 
          <>  
          {tracks?.items.map(track => {
             return(
              <PlaylistContainer
                handleSelect={handleSelect}
                trackSelected={trackSelected.includes(track.uri)}
                key={track.id}
                track={track}
                url={track.album.images[0].url}
                name={track.name}
                artist={track.artists[0].name}
                album={track.album.name}
              />
            );
          }  
          )}
          </> :
          <h2>Tracks null</h2>

          }
    </div>
  );
}

export default PlaylistSearch;
