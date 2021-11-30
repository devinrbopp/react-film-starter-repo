import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends Component {
    render() {
        const allFilms = this.props.films.map(film => {
            console.log('passing: ', film)
            return <FilmRow film={film} />
        })
        return (
            <div>
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    {allFilms}
                </div>
            </div>
        )
    }
}
