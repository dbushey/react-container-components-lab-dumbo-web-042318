// MovieReviews Presentation component

import React from 'react'

import PropTypes from 'prop-types';

const MovieReviews = props => {
  console.log(props.reviews)
  // const movieList = props.reviews.results
  // console.log(movieList);


  // const movie1 =  props.reviews.map( movie => {
  //     return <li className="review" key={movie.id}>
  //       Title: {movie.display_title}
  //     </li>
  //     }
  //   )


  return(
      <ul className="review-list">
        {props.reviews.map( review =>
          <li key={review.id} className="review">
            <h3>{review.headline}</h3>
          </li>
        )}
      </ul>
  )

}

MovieReviews.propTypes = {
  reviews: PropTypes.array
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
