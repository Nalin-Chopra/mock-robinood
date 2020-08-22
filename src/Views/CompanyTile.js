import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class CompanyTile extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img src={this.props.companyObj.logo} />
                <Card.Body>
                <Card.Title>{this.props.companyObj.name} {this.props.companyObj.price}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">See More</Button>
                </Card.Body>
            </Card>
        );
    }
}

