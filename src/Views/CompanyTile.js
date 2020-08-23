import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export function CompanyTile(props) {
    return (
        <Card style={{height: '100rem', width: '50rem', backgroundColor: "#00FF7F"}}>

            <Card.Img src={props.companyObj.logo} />
            <Card.Body>
            <Card.Title></Card.Title>
                <Card.Text>
                {props.companyObj.name} {props.companyObj.price}
                </Card.Text>
            <Button variant="primary">See More</Button>
            </Card.Body>
            
        </Card>
        
    );
}

