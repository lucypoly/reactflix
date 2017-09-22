import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        const { title, description } = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

        );
    }
}

export default MovieDetails;
