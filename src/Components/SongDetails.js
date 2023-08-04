import React from "react";
import { useSelector } from "react-redux";


const SongDetails = () => {
    const selectedSong = useSelector(state => state.selectedSong);

    return(
        <div>
            {
            selectedSong && 
            <div>
            <h2>Song Details</h2>
            <p>{selectedSong.name}</p>
            <p>{selectedSong.author}</p>
            <p>{selectedSong.duration}</p>
            <p>{selectedSong.genere}</p>
            <p>{selectedSong.album}</p>
            </div>
        }
        </div>
    )
}

export default SongDetails;