import React from "react";
import TrackList from './Tracklist.js';
import style from "./Result.css";

const Result = (props) =>{
    return (
        <div class="result-title">
            <h2>Results</h2>
            <TrackList tracks={props.result} onAdd={props.onAdd} />
        </div>
        );
}

export default Result;