
import './App.css';
import {useState} from 'react';
import SpotifyLoginPage from './Pages/SpotifyLoginPage';
import PlaylistSearch from './Pages/PlaylistSearch';



const App=()=> {
  const [isLogin, setIsLogin] = useState({ status: false, params: {} });
  const getToken = (params) => {
    if (params?.access_token) {
      setIsLogin({ status: true, params: params });
    }

  };


  return (
    <div className="App">
      { isLogin.status? (
        <PlaylistSearch params={isLogin.params} />
      ) : (
        <SpotifyLoginPage onLogin={getToken} />
      )
      }
    {/* { Datas.map(Data=>
          <PlaylistContainer
             url={Data.album.images[0].url} 
             name={Data.name} 
             artist={Data.artists[0].name}
             album={Data.album.name} />
      )
    } */}
    </div>


  );
}

export default App;
