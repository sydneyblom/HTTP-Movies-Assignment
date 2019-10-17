import React, { useState, useEffect } from 'react';
import axios from 'axios';

    const initialState = {
      id: "",
      title: "",
      director: "",
      metascore: "",
      stars: []
    };


const UpdateMovie = props => {
const [movie, setMovie] = useState (initialState);


useEffect(() =>{

}, [])
const handleChanges = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value})
}
        return {
        <div>
            <form>
                <input
                type="text"
                name="title"
                onChange={handleChanges}
                value=""
                />
            </form>
        </div>
        }
}

export default UpdateMovie;