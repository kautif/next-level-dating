import React from "react";
import "./Events.css";

export default function Events () {
    return <div className="events-container">
        <h1 className="events__heading">Events</h1>
        <div className="events-flex">
            <a className="events__link" href="http://nld-040325.eventbrite.com/" target="_blank">More Details</a>
            <h2 className="events__subheading no-margin">Date: April 3rd,</h2>
            <h2 className="events__subheading no-margin">The Game Preserve</h2>
            <h2 className="events__subheading no-margin">20810 Gulf Fwy Suite Z, Webster, TX 77598</h2>
        </div>
    </div>
}