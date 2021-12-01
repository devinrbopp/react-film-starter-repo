import React, { Component } from 'react'

export default class FilmRow extends Component {
    render() {
        const imgUrl = "https://image.tmdb.org/t/p/w780/" + this.props.film.poster_path
        return (
            <div>
                <div className="film-row">
                    <img src={imgUrl} alt={this.props.film.title + " Movie Poster"} />

                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date.slice(0,4)}</p>
                    </div>
                </div>
            </div>
        )
    }
}
