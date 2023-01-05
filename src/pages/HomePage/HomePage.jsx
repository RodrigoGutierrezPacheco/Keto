import "./HomePage.css";
import * as React from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { useRef } from 'react';
import Swal from "sweetalert2";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



function HomePage() {

	const tienda=[
		{
			img:'images/RetosKeto.png',
			titulo:'Nuestros Retos',
			precio: '$800',
			info:'Conoce todos nuestros retos!',
			link:'retos'
		},
		{
			img:'images/RetoBalanceado1.png',
			titulo:'Reto Balanceado',
			precio: '$800',
			info:'Reto pensado para llegar a tu objetivo mas rapido, divertido y saludable.',
			link:'reto-balanceado'
		},
		{
			img:'images/RecetasKeto.png',
			titulo:'Recetarios',
			precio: '$800',
			info:'Conoce todas nuestras recetas Keto',
			link:'recetarios'
		},
		{
			img:'images/ProductosRecomendados.png',
			titulo:'Productos Recomendados',
			precio: '$800',
			info:'En esta seccion vas a poder encontrar todos los productos que recmoendamos solo para ti',
			link:'productos-recomendados'
		}
	]

	const articulos=[
		{
			img:'images/RetosKeto.png',
			titulo:'Dulces Keto',
			precio: '$800',
			info:'Dulces deliciosos.',
			link:'retoKeto1'
		},
		{
			img:'images/RetoBalanceado1.png',
			titulo:'Botanas Keto',
			precio: '$800',
			info:'Reto pensado para llegar a tu objetivo mas rapido, divertido y saludable.',
			link:'retoKeto2'
		},
		{
			img:'images/RecetasKeto.png',
			titulo:'Bebidas',
			precio: '$800',
			info:'Las bebidas mas ricas',
			link:'retoKeto3'
		},
	]
	
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATE, form.current, process.env.REACT_APP_EMAILJS_PUBLICKEY)
			.then((result) => {
				Swal.fire({
					icon: 'success',
					title: '¡Correo Enviado!',
					text: 'En breve nos pondremos en contacto contigo',
					confirmButtonColor: '#3085d6',
				})
				setTimeout(function(){
					window.location.reload();
			 }, 5000);
			}, (error) => {
					console.log(error.text);
			});
	};
	
  return (
    <div className="body">
			<div className="boxOne">
			<Carousel className="carrucel">
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="images/Dieta1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="negro">Reto 1</h3>
          <p className="negro">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="images/Dieta3.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="negro">Reto 2</h3>
          <p className="negro">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={5000}>
        <img
          className="d-block w-100"
          src="images/Dieta4.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="negro">Reto 3</h3>
          <p className="negro">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <img className="dieta" src="images/dieta1.jpg" alt="" />
			<div className="videoO">
			<div className="margin-top">
				<h2 className="que">¿Qúe es la dieta Keto?</h2>
				<iframe className="video" src="https://www.youtube.com/embed/7DRLUUUO10c" title="¿Qué es la dieta keto? Dieta cetogénica para principiantes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			</div>
			</div>
			<section className="margin-top bgColor">
				<h2>¿Qué incluye?</h2>
				<div className="queIncluye">
					<div className="containerOne">
						<img className="menu" src="images/menu.png" alt="" />
						<p>Guia de Alimentacion keto / Cetogenica.</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/jugos.png" alt="" />
						<p>Recetas keto y jugos verdes para complementar tu reto.</p>
					</div >
					<div className="containerOne">
						<img className="menu" src="images/lista.png" alt="" />
						<p>Lista de alimentos de intercambio KETO.</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/guis.png" alt="" />
						<p>Guia para salir de cetosis correctamente al final del reto.</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/correcto.png" alt="" />
						<p>Guia de suplementacion correcta en cetosis.</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/nutricion.png" alt="" />
						<p>2 Semanas de inversion y nutricion optima para tu cuerpo.</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/menu1.png" alt="" />
						<p>Menú "Keto to Go" faciles y keto en casa para tu reto.</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/recomendado.png" alt="" />
						<p>Marcas recomendadas.</p>
					</div>
				</div>
			</section>
				<h2 className="margin-top">Tienda en Linea</h2>
			<article className="tienda">
			{tienda.map((item)=>(
				    <Card className='retoCard1'>
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
			</article>
				<h1>Testimonios</h1>
			<div className="tienda margin-top bgColor">
			<Card className='articulosCard'>
								<Card.Img variant="top" src='images/testimonio1.jpg' />
								<Card.Body>
									<Card.Text>
										"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus maxime similique dolorum expedita deleniti veritatis distinctio itaque eius provident assumenda ipsa qui mollitia accusamus harum magnam fugit, perferendis rem ut."
									</Card.Text>
								</Card.Body>
							</Card>
							<Card className='articulosCard'>
								<Card.Img variant="top" src='images/testimonio1.jpg' />
								<Card.Body>
									<Card.Text>
										"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus maxime similique dolorum expedita deleniti veritatis distinctio itaque eius provident assumenda ipsa qui mollitia accusamus harum magnam fugit, perferendis rem ut."
									</Card.Text>
								</Card.Body>
							</Card>
							<Card className='articulosCard'>
								<Card.Img variant="top" src='images/testimonio1.jpg' />
								<Card.Body>
									<Card.Text>
										"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus maxime similique dolorum expedita deleniti veritatis distinctio itaque eius provident assumenda ipsa qui mollitia accusamus harum magnam fugit, perferendis rem ut."
									</Card.Text>
								</Card.Body>
							</Card>
			</div>
			<div className="dietaKeto margin-top">
				<h2>¿Qué es la dieta cetogenica/keto?</h2>
				<p>*Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quaerat sapiente commodi quam! Voluptatem eaque enim veritatis quas optio nihil sed, iusto laborum odio voluptas corrupti quod commodi praesentium!</p>
				<p>*Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quaerat sapiente commodi quam! Voluptatem eaque enim veritatis quas optio nihil sed, iusto laborum odio voluptas corrupti quod commodi praesentium!</p>
				<img src="images/dieta2.png" alt="" />
				<Box sx={{ '& button': { m: 2 } }}>
      <div className="button"> 
        <Button href="/retos" color="success" variant="contained" size="medium">
          Entra al Reto!
        </Button>
      </div>
    </Box>
			</div>
				<h3>Articulos</h3>
			<div className=" margin-top tienda">
				{articulos.map((articulo)=>(
					      <Card className='articulosCard'>
								<Card.Img variant="top" src={articulo.img} />
								<Card.Body>
									<Card.Text>
										{articulo.titulo}
										<br />
										{articulo.info}
										<br />
										<a href={articulo.link}>Ver mas</a>
									</Card.Text>
								</Card.Body>
							</Card>
			))}
			</div>
			<Button href="/articulos">Ir a mas Articulos</Button>
			{/* <form ref={form} onSubmit={sendEmail}>
		<label>Name</label>
		<input type="text" name="user_name" />
		<label>Email</label>
		<input type="email" name="user_email" />
		<label>Message</label>
		<textarea name="message" />
		<input type="submit" value="Send" />
	</form> */}
	<Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control required type="text" name="user_name" placeholder="Ingresa tu Nombre completo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control required  rows={3} type="email" name="user_email" placeholder="Ingresa tu email" />
      </Form.Group>
			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control required name="message" as="textarea" rows={3} placeholder="Ingresa cualquier duda que tengas, trataremos de resolverla lo mas pronto posible" />
      </Form.Group>
			<Button type="submit" value="Send">Enviar</Button>
    </Form>
		


    </div>
  );
}

export default HomePage;
