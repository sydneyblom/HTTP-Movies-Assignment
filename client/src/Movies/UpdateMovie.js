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



useEffect(() => {
    const movieToEdit = props.movies.find(
      movie => `${movie.id}`===props.match.params.id
    )

    if (movieToEdit) setMovie(movieToEdit);
  }, [props.movies, props.match.params.id]);

  const handleChanges = e => {
    console.log(e.target.value);
    setMovie({ ...movie, [e.target.name]: e.target.value });
};


  const handleSubmit = e => {
    e.preventDefault();
    const item = props.match.params.id;
		axios
			.put(`http://localhost:5000/api/movies/${item}`, movie)
			.then(() => props.history.push("/"))
			.catch(err => {
				console.log(err);
			});
	};

	if (!movie) {
		return <h2>Loading</h2>;
	}


        return (
        <div>
            <p>edit movie</p>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                onChange={handleChanges}
                value= {movie.title}
                placeholder= "title"
                />
                <input
                type="text"
                name="director"
                onChange={handleChanges}
                value= {movie.director}
                placeholder= "director"
                />
                <input
                type="text"
                name="metascore"
                onChange={handleChanges}
                value={movie.metascore}
                placeholder= "metascore"
                />
                <input
                type="text"
                name="stars"
                onChange={handleChanges}
                value= {movie.stars}
                placeholder= "stars"
                />
                 <button type="submit">Submit changes</button>
            </form>
        </div>
        )
}

export default UpdateMovie;