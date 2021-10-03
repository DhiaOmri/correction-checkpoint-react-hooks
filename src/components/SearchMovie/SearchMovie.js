import { useState } from 'react';
import Rate from '../Rate';
import './SearchMovie.css';
const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
    setNameSearch(e.target.value);
    setRatingSearch(null);
  };
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          value={text}
          onChange={handleChange}
        />
        <div className="rating-search">
          <Rate
            rating={ratingSearch}
            setRatingSearch={setRatingSearch}
            setText={setText}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
