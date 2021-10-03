import React from 'react';

const Rate = ({ rating, setRatingSearch, setText }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(
          <span
            key={i}
            onClick={() => {
              setRatingSearch(i);
              setText('');
            }}
          >
            ★
          </span>
        ); // ★☆☆☆☆
      } else {
        starsArray.push(
          <span
            key={i}
            onClick={() => {
              setRatingSearch(i);
              setText('');
            }}
          >
            ☆
          </span>
        ); // ★★★☆☆
      }
    }
    return starsArray;
  };

  return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
  setRatingSearch: () => {},
};

export default Rate;
