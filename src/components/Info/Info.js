import React from "react";
import "./Info.css";
import nldLogo from "../../assets/next_level_dating_logo.webp";

export default function Info () {
    return <div className="info-container">
        <div className="info-flex">
            <img className="info__logo" src={nldLogo} alt="Next Level Dating logo" />
            <div className="info__text">
                <h1 className="info__heading">Looking for Love and Having Fun Gaming</h1>
                <p className="info__content">This is speed dating, but where speed dating would usually end, this event continues. Normally, in a speed dating event, the actual date portion comes later. But, in this event, if you match, we'll take the speed dating to the next level and you'll game together to see how well you click. And, what happens after that is up to you.</p>
            </div>
        </div>
    </div>
}