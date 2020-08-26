import React, {useEffect, useState} from 'react';
import {CompanyTile} from './CompanyTile/CompanyTile';

const API_URL = 'https://mock-robinhood-server-gvycz7jq1.vercel.app/stocks';

export function TickerList(props) {
    const [companyList, setCompanyList] = useState([]);

    useEffect(() => {
        let interval;
        async function getStocks() {
            try {
                let newStocks = fetch(API_URL)
                    .then(response => response.json())
                    .then(stocks => {
                        newStocks = stocks;
                    });
                if (newStocks.length === 0) {
                    throw('Mock server returned empty stock data.');
                }
                interval = setInterval(() => setCompanyList(newStocks), 1500);
            } catch {
                interval = setInterval(() => setCompanyList([]), 1500);
            }
        };
        getStocks();
        return () => {
            clearInterval(interval);
        }
    });
    let cardElems = [];
    if (companyList != undefined) {
        cardElems = companyList.map(company => <CompanyTile key={company.name} companyObj={company} />)
    }
    
    let noStocksToDisplay = companyList.length === 0;
    const noStocks = (
        <h1 style={{fontSize: "10rem", color: "#FFFFFF", position: "relative"}}>No stock data currently available.</h1>
    );
    
    return (            
        <div className="container-fluid d-flex justify-content-center" >
            <div className="row">
                {cardElems}
            </div>
            <div>
                {noStocksToDisplay && noStocks} 
            </div>
        </div>
    )
}