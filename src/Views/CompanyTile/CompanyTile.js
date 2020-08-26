import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function CompanyTile(props) {
    return (
        <div className="col"> 
            <Card className="main-card" style={{fontFamily: 'Titillium Web',  height: '100rem', width: '50rem', borderRadius: "5rem"}}>
                <Card.Img className="card-img-top" src={props.companyObj.logo} style={{marginTop: "10px", padding: "35px", maxHeight: "50rem", maxWidth: "50rem", objectFit: "contain"}} />
                <Card.Body style={{marginTop: '8rem', fontSize: "7rem", fontWeight: 800}}>
                    <Card.Text className="card-text text-secondary">
                    {props.companyObj.name} {props.companyObj.price}
                    </Card.Text>
                    <Card.Title className="card-text text-secondary" style={{marginTop: '2rem', fontSize: "5rem", fontWeight: 400}}>{props.companyObj.fullName}</Card.Title>
            </Card.Body>
            </Card>
        </div>
    );
}

