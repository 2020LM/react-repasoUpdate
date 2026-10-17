import './footer.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Footer = (proops) => {

    return (
        <Card bg="dark" data-bs-theme="dark">
          <Card.Header>Hooks</Card.Header>
           <Card.Body>
             <Card.Title>React Hooks</Card.Title>
             <Card.Text>
               Learn About React Hooks
             </Card.Text>
             <Button variant="primary" href="https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h" target = "_blank">React Hooks course</Button>
             </Card.Body>
        </Card>
    )
}


