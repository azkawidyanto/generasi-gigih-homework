const PlaylistContainer=(props)=>{
    const selectSong=()=>{
        alert("Pilih Lagu Queen!")
      }
    return(
        <>
        <div className="container">   
            <div className="column">
              <img id="image" className="image" src={props.url} alt=""/>
            </div>
            <div className="container-content">
                <h2 className="song-title" >Song Title: <span id="title-song">{props.name}</span></h2>
                <h2 className="song-artist">Song Artist: <span id="song-artist">{props.artist}</span></h2>
                <h2 className="song-album">Song Albums: <span id="song-album">{props.album}</span></h2>
                <button onClick={selectSong}>Select</button>
            </div>
        </div>
        </>
    );
}

export default PlaylistContainer;