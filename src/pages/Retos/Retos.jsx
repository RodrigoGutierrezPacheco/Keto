import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const reto=[
	{
		img:'images/dieta.jpg',
		titulo:'Reto Keto 1',
		precio: '$75',
		info:'El mejor de todos1',
		link:'retoKeto1'
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Reto Keto 2',
		precio: '$750',
		info:'El mejor de todos1',
		link:'retoKeto2'
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Reto Keto 3',
		precio: '$750',
		info:'El mejor de todos1',
		link:'retoKeto3'
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Reto Keto 4',
		precio: '$750',
		info:'El mejor de todos1',
		link:'retoKeto4'
	},
	{
		img:'images/dieta1.jpg',
		titulo:'RetoKeto 5',
		precio: '$750',
		info:'El mejor de todos1',
		link:'retoKeto5'
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Reto Keto 6',
		precio: '$750',
		info:'El mejor de todos',
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
		<div>
			<h1>Retos</h1>
			<div className='retos'>
			{reto.map((item)=>(
				    <Card className='reto' key={item.img}  sx={{maxWidth: "45%"}}>
						<CardActionArea href={item.link}>
							<CardMedia component="img" height="140" image="images/dieta.jpg" alt="green iguana" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{item.titulo}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{item.info}
								</Typography>
								<Typography variant="h6" color="CaptionText">
									{item.precio}
								</Typography>
								<Button onClick={handleOpen} href={item.link}>Ver Mas</Button>
							</CardContent>
						</CardActionArea>
					</Card>
			))}
			</div>
		</div>

  );
}

export default Retos;