import React,{useCallback} from "react";
import TrackList from "./Tracklist.js";
import style from "./Playlist.css";

const Playlist = (props) =>{

    const handleNameChange = useCallback((event)=>{
        props.onNameChange(event.target.value);
    },[props.onNameChange]);

    return (
        <div>
          <input className="nome-playlist" onChange={handleNameChange} defaultValue={"New Playlist"} />
          <TrackList
            tracks={props.traccePlaylist}
            isRemoval={true}
            onRemove={props.onRemove}
          />
          <button className="save" onClick={props.onSave}>
            SALVA IN SPOTIFY
          </button>
        </div>
      );

}

export default Playlist;