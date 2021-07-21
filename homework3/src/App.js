
import './App.css';
import {useState} from 'react';
import Datas from "./all-sample";
import PlaylistContainer from './Components/Playlist Container/';



const App=()=> {
  const {islogin, setIsLogin} = useState({status:false, params:[]}) 
  // const 
  const  randomString=(length)=>{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  
  }


  const authorize =()=>{
      const state = randomString(16);
      localStorage.setItem("spotify_auth_state", state);
      const redirect_uri = "http://localhost:3000"
      var scopes = 'user-read-private user-read-email';
      window.location=('https://accounts.spotify.com/authorize' +
        '?response_type=code' + 
        '&client_id=' + "31f4044f1fa7420fb3773624bb43395c" +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri)+
        '&state='+ encodeURIComponent(state));
      setIsLogin()
  };

  return (
    <div className="App">
      { islogin?
      <>
        <input name="search" />
        <button label="search">Search</button>

      </>:
      <button onClick={authorize}>Login</button>

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
