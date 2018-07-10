import React, { Component } from 'react';
import 'isomorphic-fetch';
//require('es6-promise').polyfill();

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(reviews =>
      this.setState({
        reviews: reviews.results
      }))
}


  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a Search term:
            <input type="text" name="name"
              value={this.state.value} onChange={this.handleChange}>

            </input>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
