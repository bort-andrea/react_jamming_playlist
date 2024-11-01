import React, {useCallback} from "react";
import style from "./Track.css";

const Track = (props) =>{

    const addTrack = useCallback((event)=>{
        props.onAdd(props.track);
    },[props.onAdd,props.track]);

    const removeTrack = useCallback((event)=>{
        props.onRemove(props.track);
    },[props.onRemove,props.track]);

    const renderAction = () => {
        if(props.isRemoval){
            return (
                <button className="add-rem" onClick={removeTrack}>
                  -
                </button>
              );
        }
        return (
            <button className="add-rem" onClick={addTrack}>
              +
            </button>
        );
    };

    return (
        <div class="track-containers">
          <div class="track-name">
            <h3>{props.track.name}</h3>
            <p>
              {props.track.artist} | {props.track.album}
            </p>
          </div>
          {renderAction()}
        </div>
    );
}

export default Track;