import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MyApartmentIndex extends Component {
    render() {
        return (
            <>
                <h1>All the Apartments</h1>
                <br />
                <div id="index-body">
                    {this.props.apartments.map((apartment, index) => {
                        return (
                            <div key={index} className="index-card">
                                <h3>{apartment.street}</h3>
                                <h3>{apartment.city}, {apartment.state}</h3>
                                <Link to={`/apartmentshow/${apartment.id}`} className="button">
                                    More Info
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}