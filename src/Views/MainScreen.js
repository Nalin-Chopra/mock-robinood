import React, {useEffect, useState} from 'react';
import {CompanyTile} from './CompanyTile';
import 'bootstrap/dist/css/bootstrap.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FlatList from 'flatlist-react';
const API_URL = 'http://localhost:5000/stocks';

export function MainScreen(props) {
    const [companyList, setCompanyList] = useState([]);

    useEffect(() => {
        let interval;
        async function getStocks() {
            let newStocks = []
            fetch(API_URL)
            .then(response => response.json())
            .then(stocks => {
                newStocks = stocks;
            });
            interval = setInterval(() => setCompanyList(newStocks), 1000);
        };
        getStocks();
        return () => {
            clearInterval(interval);
        }
        
    });
    
    return (   
        <FlatList 
            style={{marginTop: "auto"}}
            displayGrid 
            gridGap="50rem" 
            list={companyList} 
            renderItem={company => <CompanyTile key={Date.now().toString() + Math.random() * 0.999} companyObj={company} /> }
        />   
    )
}