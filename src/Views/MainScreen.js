import React from 'react';
import {TickerList} from './TickerList';

export function MainScreen(props) {
    return (
        <div> 
            <h1 style={{color: "#FFFF", fontSize: "15rem", marginBottom: "25rem", position: "relative"}}>MOCK ROBINHOOD</h1>

            <h2 style={{color: "#FFFF", fontSize: "5rem", marginBottom: "10rem", position: "relative"}}> SIMDAQ EXCHANGE</h2>
            <TickerList />
        </div>
    );
}

