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
		titulo:'Reto Keto',
		precio: '$75',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Reto Keto',
		precio: '$750',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Reto Keto',
		precio: '$750',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Reto Keto',
		precio: '$750',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'RetoKeto2',
		precio: '$750',
		info:'El mejor de todos1',
	},
	{
		img:'images/dieta1.jpg',
		titulo:'Reto Keto',
		precio: '$750',
		info:'El mejor de todos',
		link:'retoKeto'
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
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="images/dieta.jpg"
								alt="green iguana"
							/>
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
								<Button href={`/retos/${item.titulo}`}>Ver Mas</Button>
{/* <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
{item.info}
{item.precio}
    </Typography>
  </Box>
</Modal> */}
							</CardContent>
						</CardActionArea>
					</Card>
			))}
			</div>
		</div>

  );
}

export default Retos;