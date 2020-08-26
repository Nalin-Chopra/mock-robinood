const fetch = require('node-fetch');

export const companies = [
    {
        name: "AAPL",
        price: 458.83,
        logo: "https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png"
    },
    {
        name: "FB",
        price: 261.16,
        logo: "https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Facebook-Logo.png?fit=600%2C600"
    },
    {
        name: "GOOGL",
        price: 1516.24,
        logo: "https://cdn.vox-cdn.com/thumbor/2eZPJ-j9zXm5AIro7TIiEBCgNoc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/3218223/google.jpg"
    },
    {
        name: "GTSBY",
        price: 4990.12,
        logo: "https://media-exp1.licdn.com/dms/image/C560BAQHuiTdDW58LOw/company-logo_200_200/0?e=1606348800&v=beta&t=DVVrNQXp9Kw6WAH0XqjvdXJUboA2N8yvkBkE0h0XA-s"
    },
    {
        name: "AMZN",
        price: 3284.72,
        logo: "https://p7.hiclipart.com/preview/832/502/474/text-brand-clip-art-amazon.jpg"
    }

]

const API_URL = 'http://localhost:5000/stocks';




export async function getStocks(input) {
    let newStocks = []
    fetch(API_URL)
    .then(response => response.json())
    .then(stocks => {
        newStocks = stocks;
    });
    return newStocks;
    
}