// eslint-disable-next-line
import { useEffect, useState } from "react";
import PlaylistContainer from "../Components/Playlist Container";
// import Datas from '../data'


const PlaylistSearch=(props)=>{
    const [tracks, setTracks] = useState(null);
    const [search, setSearch] = useState('');

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
    // useEffect(() => {
    //   getSearch();
    // });

  return (
    <>
      <h1 className="Title">Playlist Search</h1>
      <div className="search">
        <input value={search} className="search-input" onChange={(event)=>getInput(event)} type="text" name="search"/>
        <button onClick={getSearch}>
          Search
        </button>
      </div>
      {console.log(tracks)}
          {tracks? 
          <>  
          {tracks?.items.map((track,id) => {
             return(
              <PlaylistContainer
                key={id}
                uri={track.uri}
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
    </>
  );
}

export default PlaylistSearch;
