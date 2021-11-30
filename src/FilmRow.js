import React, { Component } from 'react'

export default class FilmRow extends Component {
    render() {
        return (
            <div>
                <div className="film-row">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.year}</p>
                </div>
            </div>
        )
    }
}
