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


const reto=[
	{
		img:'images/Dieta1.png',
		titulo:'Reto Keto 1',
		precio: '$800',
		info:'Enfocado para personas que nunca han estado en dieta cetogenica',
		link:'retoKeto1'
	},
	{
		img:'images/Dieta3.png',
		titulo:'Reto Keto 2',
		precio: '$800',
		info:'Reto pensado para llegar a tu objetivo mas rapido, divertido y saludable.',
		link:'retoKeto2'
	},
	{
		img:'images/Dieta4.png',
		titulo:'Reto Keto 3',
		precio: '$800',
		info:'Podras llegar a tus resultados sin necesidad de restringir muchos alimentos',
		link:'retoKeto3'
	},
	{
		img:'images/RetoBalanceado1.png',
		titulo:'Reto Keto 4',
		precio: '$800',
		info:'Enfocado para las personas que asistan continuamente al gimnasio',
		link:'retoKeto4'
	},
	{
		img:'images/RetosKeto.png',
		titulo:'Reto Keto 5',
		precio: '$800',
		info:'Optimo para las personas con nivel de vida sedentario',
		link:'retoKeto5'
	},
	{
		img:'images/Dieta1.png',
		titulo:'Reto Keto 6',
		precio: '$800',
		info:'Si tienes mas de 60 años, este reto está pensado para ti',
		link:'retoKeto6'
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
			<Image src='images/RetosKeto.png' width='99%'>

			</Image>
			<div className='container'>
			<h3 className='titulo'>¿Qué es una dieta Keto?</h3>
			<p>Una dieta Cetogenica Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id iusto illo minus, ullam veritatis error in sequi repellendus deleniti non voluptatum modi! Dolorem consequuntur at dignissimos veritatis amet assumenda.</p>
				</div>
			<div className='retos'>
			{reto.map((item)=>(
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
		</div>

  );
}

export default Retos;