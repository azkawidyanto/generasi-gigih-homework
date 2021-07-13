import Image from './118423.jpg'
import './App.css';
import Data from "./data";


const App=()=> {
  const selectSong=()=>{
    alert("Pilih Lagu Queen!")
  }

  return (
    <div className="App">
      <div className="container">            

          <div className="column">
              <img id="image" className="image" src={Data.album.images[0].url} alt=""/>
          </div>
          <div className="container-content">
            <h2 className="song-title" >Song Title: <span id="title-song">{Data.name}</span></h2>
            <h2 className="song-artist">Song Artist: <span id="song-artist">{Data.artists[0].name}</span></h2>
            <h2 className="song-album">Song Albums: <span id="song-album">{Data.album.name}</span></h2>
            <button onClick={selectSong}>Select</button>
          </div>
        </div>  
      </div>
  );
}

export default App;
