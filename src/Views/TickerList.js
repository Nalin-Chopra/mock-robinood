import React, {useEffect, useState} from 'react';
import {CompanyTile} from './CompanyTile/CompanyTile';

const API_URL = 'https://mock-robinhood-server-e3jyc8q9t.vercel.app/stocks';

let companies = [
    {
        name: "AAPL",
        fullName: "Apple",
        price: 458.83,
        logo: "https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png",
        description: "Apple Inc. designs, manufactures and markets mobile communication and media devices, personal computers and portable digital music players. The Company sells a range of related software, services, accessories, networking solutions, and third-party digital content and applications."
    },
    {
        name: "FB",
        fullName: "Facebook",
        price: 261.16,
        logo: "https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Facebook-Logo.png?fit=600%2C600"
    },
    {
        name: "GOOG",
        fullName: "Google",
        price: 1516.24,
        logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
    },
    {
        name: "GTSBY",
        fullName: "Gatsby",
        price: 4990.12,
        logo: "https://media-exp1.licdn.com/dms/image/C560BAQHuiTdDW58LOw/company-logo_200_200/0?e=1606348800&v=beta&t=DVVrNQXp9Kw6WAH0XqjvdXJUboA2N8yvkBkE0h0XA-s"
    },
    {
        name: "AMZN",
        fullName: "Amazon",
        price: 3284.72,
        logo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png"
    }

]

export function TickerList(props) {
    const [companyList, setCompanyList] = useState(companies);

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
    let cardElems = companyList.map(company => <CompanyTile key={Date.now().toString() + Math.random() * 0.999} companyObj={company} />)

    
    return (            

        <div className="container-fluid d-flex justify-content-center" >
            <div className="row">
                {cardElems}
            </div>
        </div>
    )
}