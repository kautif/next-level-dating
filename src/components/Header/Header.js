import React from "react";
import "./Header.css";
import Info from "../Info/Info";
import Events from "../Events/Events";

export default function Header () {
    return <div className="header-container">
        <Info />
        <Events />
    </div>
}