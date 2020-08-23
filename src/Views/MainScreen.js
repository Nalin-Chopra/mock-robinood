import React, {useEffect, useState} from 'react';
import {getStocks, companies} from '../Services/mockNodeFuncs.js'; 
import {CompanyTile} from './CompanyTile';
import 'bootstrap/dist/css/bootstrap.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FlatList from 'flatlist-react';

export function MainScreen(props) {
    const [companyList, setCompanyList] = useState(companies);

    useEffect(() => {
        let newStocks = getStocks(companyList);
        const interval = setInterval(() => setCompanyList(newStocks), 1000);
        return () => {
            clearInterval(interval);
        };
    });         
    
    return (        
        <FlatList 
            displayGrid 
            gridGap="100rem" 
            list={companyList} 
            renderItem={company => <CompanyTile key={Date.now().toString() + Math.random() * 0.999} companyObj={company} /> }
        />
        
    )
}