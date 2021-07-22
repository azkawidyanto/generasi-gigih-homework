/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";


const SpotifyLoginPage =(props)=> {
  const randomString = (length) => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const authorize = () => {
    const state = randomString(16);
    localStorage.setItem("spotify_auth_state", state);
    const scope = "user-read-private user-read-email";
    let url = "https://accounts.spotify.com/authorize?response_type=token&client_id=" + encodeURIComponent(process.env.REACT_APP_SPOTIFY_CLIENT_ID)
      + "&scope=" + encodeURIComponent(scope) +"&redirect_uri=" + encodeURIComponent(process.env.REACT_APP_REDIRECT_URI) +
      "&state=" + encodeURIComponent(state);
    window.location = url;
  };

  const getHashParams = () => {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    props.onLogin(hashParams);
  };

  useEffect(() => {
    getHashParams();
  }, []);

  return (
    <div>
      <button onClick={authorize}>
        Login
      </button>
    </div>
  );
}

export default SpotifyLoginPage;
