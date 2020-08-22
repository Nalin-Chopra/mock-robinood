import React from 'react';
import {getStocks} from '../Services/mockNodeFuncs.js'; 
import {CompanyTile} from './CompanyTile';

export class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {companies: []};
    }

    componentDidMount() {
        const curCompanies = getStocks();
        this.setState({companies: curCompanies});
    }
    render() {
        let tiles = this.state.companies.map(company => (
            <CompanyTile companyObj={company} />
        ));
        return (
            <ul>
                {tiles}
            </ul>
        )
    }
}