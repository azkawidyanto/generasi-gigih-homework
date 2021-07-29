
import './App.css';
import {useState} from 'react';
import SpotifyLoginPage from './Pages/SpotifyLoginPage';
import PlaylistSearch from './Pages/PlaylistSearch';
import PlaylistForm from './Pages/playlistForm';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


const App=()=> {
  const [isLogin, setIsLogin] = useState({ status: false, params: {} });
  const getToken = (params) => {
    if (params?.access_token) {
      setIsLogin({ status: true, params: params });
    }

  };


  return (
    <div className="App">
          <BrowserRouter>
          <Switch>
            <Route path="/login" component={SpotifyLoginPage}/>
            <Route path="/search" component={PlaylistSearch}/>
            <Route path="/create-playlist" component={PlaylistForm} />
          </Switch>
        </BrowserRouter>
      { isLogin.status? (
          <li>
           <Link to="/search"><PlaylistSearch params={isLogin.params} /></Link>
         </li>
        // <PlaylistSearch params={isLogin.params} />
      ) : (
        <li>
        <Link to="/login"> <SpotifyLoginPage onLogin={getToken} /></Link>
      </li>

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
