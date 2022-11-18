import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';


const recetas=[
	{
		img:'images/dieta.jpg',
		titulo:'Pastel keto',
		precio: '$75',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Postre Keto',
		precio: '$750',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Dulces Keto',
		precio: '$750',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Paletas Keto',
		precio: '$750',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Panes Keto',
		precio: '$750',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Galletas Keto',
		precio: '$750',
		info:'El mejor de todos',
		link:'retoKeto'
	},
]

const Recetas =()=> {
	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  return (
		<div>
				<img className='recetasImg' src="images/RetoBalanceado1.png" alt="" />
			  <p>Descubre las mas deliciosas recetas</p>
			<div className='retos'>
			{recetas.map((item)=>(
				   <Card className='retoCard' style={{ width: '90%', height:'20%' }}>
					 <Card.Img variant="top" src={item.img} />
					 <Card.Body>
						 <Card.Title>{item.titulo}</Card.Title>
						 <Card.Text>
							 {item.info}
						 </Card.Text>
						 <Button variant='outline-primary' href={item.link}>¡Conocelo!</Button>
					 </Card.Body>
				 </Card>
			))}
			</div>
			<h3>Preguntas Frecuentes</h3>
			<div className="preguntas">
			<Accordion>
      <Accordion.Item eventKey="1" className='preguntas1' style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>¿Puedo comer dulces?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item >
			<Accordion/>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>¿Puedo Tomar?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			</Accordion>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>¿Debo dejar de comer?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			</Accordion>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>Siento que me falta mas comida</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			</Accordion>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>Los alimentos no me gustan</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			</Accordion>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>Me siento mas debil</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
		</Accordion>
		</div>
		</div>

  );
}

export default Recetas;