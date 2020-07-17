import React from 'react';

export default function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input type="text" name="query" className="input" placeholder="i.e. Jurasic Park" />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
