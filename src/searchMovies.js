import React from 'react';

export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('submitting');

    const query = 'Jurassic Park';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=083af21ff427863db42b56ed491a895b&language=en-US&query=${query}&page=include_adult=false
    `;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        name="query"
        className="input"
        placeholder="i.e. Jurasic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
