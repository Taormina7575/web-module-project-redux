import React from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoriteActions';


const FavoriteMovieList = (props) => {
    
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons" onClick={() => {
                            props.dispatch(removeFavorite(movie.id))
                        }}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoritesCat.favorites
    }
}

export default connect(mapStateToProps)(FavoriteMovieList);