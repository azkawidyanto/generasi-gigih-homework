import { useState } from "react";
import { Button } from 'react-bootstrap';

const PlaylistContainer=(props)=>{
    const selectSong=()=>{           
         setSelect(!select)
        if(idSelected===null){
            setIDSelected(props.uri)
        } else{
            setIDSelected(null)
        }

      }
      const [select,setSelect] = useState(false);
      const [idSelected,setIDSelected]= useState(null);
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
                {select && (idSelected ===props.uri) ?
                 "Deselected"
                 :"Select"
                 }   
                </Button>
            {console.log(idSelected)}
            </div>
        </div>
        </>
    );
}

export default PlaylistContainer;