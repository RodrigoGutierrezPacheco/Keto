import * as React from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';




const reto=[
	{
		img:'images/Dieta1.png',
		titulo:'Reto Keto 1',
		precio: '$800',
		info:'Enfocado para personas que nunca han estado en dieta cetogenica',
		link:'reto-keto1'
	},
	{
		img:'images/Dieta3.png',
		titulo:'Reto Keto 2',
		precio: '$800',
		info:'Reto pensado para llegar a tu objetivo mas rapido, divertido y saludable.',
		link:'reto-keto2'
	},
	{
		img:'images/Dieta4.png',
		titulo:'Reto Keto 3',
		precio: '$800',
		info:'Podras llegar a tus resultados sin necesidad de restringir muchos alimentos',
		link:'reto-keto3'
	},
	{
		img:'images/RetoBalanceado1.png',
		titulo:'Reto Keto 4',
		precio: '$800',
		info:'Enfocado para las personas que asistan continuamente al gimnasio',
		link:'reto-keto4'
	},
	{
		img:'images/RetosKeto.png',
		titulo:'Reto Keto 5',
		precio: '$800',
		info:'Optimo para las personas con nivel de vida sedentario',
		link:'reto-keto5'
	},
	{
		img:'images/Dieta1.png',
		titulo:'Reto Keto 6',
		precio: '$800',
		info:'Si tienes mas de 60 años, este reto está pensado para ti',
		link:'reto-keto6'
	},
]

const Retos =()=> {
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
		<div className='body'>
			<Image className='margin-bottom  ' src='images/RetosKeto.png' width='99%'>

			</Image>
			<div className='container margin-top margin-bottom'>
			<h3 className='titulo'>¿Qué es una dieta Keto?</h3>
			<p>Una dieta Cetogenica Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id iusto illo minus, ullam veritatis error in sequi repellendus deleniti non voluptatum modi! Dolorem consequuntur at dignissimos veritatis amet assumenda.</p>
				</div>
			<div className='retos'>
			{reto.map((item)=>(
				    <Card className='retoCard'>
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
			<div className='container margin-top margin-bottom bgColor'>
				<h3 className='margin-top'>¿Como funciona la dieta Cetognica?</h3>
				<p>Una dieta Cetogenica funciona Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, obcaecati! Voluptas reprehenderit suscipit pariatur aliquid nulla optio, ratione, necessitatibus commodi mollitia porro ab quia voluptates vitae non. Voluptatibus, ipsam ut?</p>
			</div>
			<h3 className='margin-top'>Preguntas Frecuentes</h3>
			<div className="preguntas margin-top">
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

export default Retos;