import React, { Component } from 'react'

export default class FilmPoster extends Component {
    render() {
        const imgUrl = "https://image.tmdb.org/t/p/w780/" + this.props.thisMovie.poster_path
        return (
            <div>
                <img src={imgUrl} alt={this.props.thisMovie.title + " Movie Poster"} />
            </div>
        )
    }
}
