import React from 'react'
import { selectSong } from '../actions/song.actions'
import { useSelector, useDispatch } from 'react-redux'

const SongList = () => {
    const songs = useSelector(state => state.songs)
    const dispatch = useDispatch();



  return (
    <div className='songs'>
        <h1>Songs App</h1>
        {
            songs.map((song, index) => (
                <div className='songs-list'>
                    <h2>{song.name}</h2>
                    <button
                    onClick={()=> dispatch(selectSong(song))}
                    >Details</button>
                </div>
            ))
        }
    </div>
  )
}

export default SongList