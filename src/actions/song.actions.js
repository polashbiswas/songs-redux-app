import {SELECT_SONG} from './actionType';

//action creators


export const selectSong = (song) => {

    return{
        type: SELECT_SONG,
        payload: song
    }
}