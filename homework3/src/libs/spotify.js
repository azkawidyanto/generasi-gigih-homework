const BASE_URL = 'https://api.spotify.com/v1'

const randomString = (length) => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
export const authenticationUrl = () => {
    const state = randomString(16);
    localStorage.setItem("spotify_auth_state", state);
    const scope = "user-read-private user-read-email";
    let url = "https://accounts.spotify.com/authorize?response_type=token&client_id=" + encodeURIComponent(process.env.REACT_APP_SPOTIFY_CLIENT_ID)
      + "&scope=" + encodeURIComponent(scope) +"&redirect_uri=" + encodeURIComponent(process.env.REACT_APP_REDIRECT_URI) +
      "&state=" + encodeURIComponent(state);

    return url;
};

export const authorize = () => {
    window.location.replace(authenticationUrl())
}

export const getProfile = (accessToken) => {
    return fetch(`${BASE_URL}/me`, {
        headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(res => res.json())
}

export const getTracks = (accessToken, options) => {
    const params = new URLSearchParams(options).toString()
    return fetch(`${BASE_URL}/search?${params}`, {
        headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(res => res.json())
}

export const postPlaylist = (accessToken, userId, payload) => {
    return fetch(`${BASE_URL}/users/${userId}/playlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
}

export const postPlaylistTracks = (accessToken, playlistId, payload) => {
    return fetch(`${BASE_URL}/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
}