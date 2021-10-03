import { useEffect, useState } from 'react';
import AddMovie from './components/AddMovie/AddMovie';
import { moviesData } from './components/MoviesData';
import MoviesList from './components/MoviesList';
import SearchMovie from './components/SearchMovie/SearchMovie';

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(null);

  const filterByName = () => {
    // nameSearch &&
    setMoviesList(
      moviesData.filter((el) =>
        el.name.toLowerCase().startsWith(nameSearch.toLowerCase().trim())
      )
    );
  };

  const filterByRating = () => {
    ratingSearch &&
      setMoviesList(moviesData.filter((el) => el.rating === ratingSearch));
  };

  const addNewMovie = (newMovie) => {
    moviesData.push(newMovie);
    setMoviesList([...moviesList, newMovie]);
  };

  useEffect(() => {
    filterByName();
    // eslint-disable-next-line
  }, [nameSearch]);

  useEffect(() => {
    filterByRating();
    // eslint-disable-next-line
  }, [ratingSearch]);

  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
