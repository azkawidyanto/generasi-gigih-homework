import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

const PlaylistContainer=(props)=>{
    const {handleSelect,track} = props
    const [isSelect,setIsSelect] = useState(false);
    const selectSong=()=>{           
        setIsSelect(!isSelect)
        handleSelect(track.uri)
      }
      useEffect(()=> {
        props.trackSelected
          && setIsSelect(true)
            },[])

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
                <Button onClick={selectSong}>
                {isSelect?
                 "Deselect"
                 :"Select"
                 }   
                </Button>
            </div>
        </div>
        </>
    );
}

export default PlaylistContainer;