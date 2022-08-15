import React from "react"

export default function Card(props){
    return (
        <div className="card">
            <img className="card-img" src={props.imageUrl} />
            <div className="card-location-div">
                <p className="card-location"><i className="fa-solid fa-location-dot"></i>{props.location}</p>
                <a className="card-maps-link" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-duration">{props.startDate} - {props.endDate}</p>
            <p className="card-description">{props.description}</p>
        </div>
    )
}