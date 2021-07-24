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
