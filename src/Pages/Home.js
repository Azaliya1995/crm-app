import React, { Component } from "react";
import { Container, CardDeck, Card } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <CardDeck style={{ display: "flex", flexDirection: "row" }}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title>First card</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title>Second card</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title>Third card</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}
