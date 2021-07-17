
import './App.css';
import Datas from "./all-sample";
import PlaylistContainer from './Components/Playlist Container/';



const App=()=> {


  return (
    <div className="App">
    { Datas.map(Data=>
          <PlaylistContainer
             url={Data.album.images[0].url} 
             name={Data.name} 
             artist={Data.artists[0].name}
             album={Data.album.name} />
      )
    }
    </div>


  );
}

export default App;
