import React from 'react'
import { Container, Card } from 'react-bootstrap'

const ErrorCard = () => {
  return (
    <Container className="mt-5">
      <Card
        style={{ minWidth: '18rem', minHeight: '13rem' }}
        className="p-5 m-2 custom-card custom-borders"
      >
        <Card.Body>
          <Card.Title>Oh no, something wrong happened!</Card.Title>
          <Card.Text>( ⧉ ⦣ ⧉ )</Card.Text>
          <Card.Text className="text-center">
            <Card.Img
              className="isolate w-50"
              src="https://octodex.github.com/images/plumber.jpg"
              alt="Octo Plumber"
              variant="bottom"
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ErrorCard
