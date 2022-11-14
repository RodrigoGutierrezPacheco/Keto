import "./HomePage.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function HomePage() {
  return (
    <div className="body">
			<div>
			<img className="dieta" src="images/comida.jpg" alt="" />
      <img className="dieta" src="images/dieta1.jpg" alt="" />
			</div>
			<div>
				<h2>¿Qúe es la dieta Keto?</h2>
				<iframe width="99%" height="300rem" src="https://www.youtube.com/embed/7DRLUUUO10c" title="¿Qué es la dieta keto? Dieta cetogénica para principiantes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<section>
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
				<h2>Tienda en Linea</h2>
			<article className="tienda">
				<Card sx={{ maxWidth: '49%',height:'20rem' }} className="one">
      <CardActionArea href="/retos">
        <CardMedia
          component="img"
          height="140"
          image="images/comida.jpg"
          alt="green iguana"
					
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nuestros Retos
          </Typography>
          <Typography variant="body2" color="text.secondary">
						Nuestros retos Lorem ipsum dolor sit amet, consecte
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
		<Card sx={{ maxWidth: '49%',height:'20rem' }} className="one">
      <CardActionArea href="/retos-balanceado">
        <CardMedia
          component="img"
          height="140"
          image="images/comida.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Reto 21 Balanceado
          </Typography>
          <Typography variant="body2" color="text.secondary">
						El Reto 21 Balanceado Lorem ipsum dolor sit amet 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
		{/* <Card sx={{ maxWidth: '49%',height:'20rem' }} className="one">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/comida.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Consulta en Linea
          </Typography>
          <Typography variant="body2" color="text.secondary">
						Consulta en Linea Lorem ipsum dolor sit amet consectetur 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
		<Card sx={{ maxWidth: '49%',height:'20rem' }} className="one">
      <CardActionArea href='/recetas'>
        <CardMedia
          component="img"
          height="140"
          image="images/comida.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Recetarios
          </Typography>
          <Typography variant="body2" color="text.secondary">
						Nuestros Recetarios con las mas ricas comidas
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
		<Card sx={{ maxWidth: '49%',height:'20rem' }} className="one">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/comida.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Productos Recomendados
          </Typography>
          <Typography variant="body2" color="text.secondary">
						En esta seccion te recomendamos los mejores productos disponibles solo para ti.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
		{/* <Card sx={{ maxWidth: '49%',height:'20rem' }} className="one">
      <CardActionArea href="/rutinas">
        <CardMedia
          component="img"
          height="140"
          image="images/comida.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Clases en Linea
          </Typography>
          <Typography variant="body2" color="text.secondary">
						Nuestras Clases en linea te ayudan a sobrellevar mejor tu dia
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
			</article>
			<div className="testi">
				<h2>Testimonios</h2>
				<article className="testimonios">
				<div className="testimonio">
					<img src="images/testimonio1.jpg" alt="" />
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, officia? Excepturi, in optio. Dolorum itaque doloremque necessitatibus quibusdam iste, id reiciendis hic ut veritatis ipsam ratione eaque accusantium amet voluptates?</p>
				</div>
				<div className="testimonio">
					<img src="images/testimonio1.jpg" alt="" />
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, officia? Excepturi, in optio. Dolorum itaque doloremque necessitatibus quibusdam iste, id reiciendis hic ut veritatis ipsam ratione eaque accusantium amet voluptates?</p>
				</div>
				</article>
			</div>
			<div className="dietaKeto">
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
			<div className="articuloOne">
			<article className="articulo">
				<img src="images/articulo.jpg" alt="" />
				<h3>Beneficios de la dieta Keto</h3>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, excepturi asperiores? Ullam atque blanditiis ut sit minima necessitatibus eaque deserunt quis! Repellat dolorem cupiditate voluptate est quas, mollitia quo ex?</p>
				<a href="/beneficios">Leer más--></a>
			</article>
			<article className="articulo">
				<img src="images/articulo.jpg" alt="" />
				<h3>Postres Keto</h3>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, excepturi asperiores? Ullam atque blanditiis ut sit minima necessitatibus eaque deserunt quis! Repellat dolorem cupiditate voluptate est quas, mollitia quo ex?</p>
				<a href="">Leer más--></a>
			</article>
			<article className="articulo">
				<img src="images/articulo.jpg" alt="" />
				<h3>Dulces Keto</h3>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, excepturi asperiores? Ullam atque blanditiis ut sit minima necessitatibus eaque deserunt quis! Repellat dolorem cupiditate voluptate est quas, mollitia quo ex?</p>
				<a href="">Leer más--></a>
			</article>
			<Box sx={{ '& button': { m: 2 } }}>
      <div> 
        <Button href="/articulos" variant="contained" className='buttonLeer' color="info">
          Leer Mas Articulos
        </Button>
      </div>
    </Box>
			</div>
			<img className="ketoImg" src="images/ketoChallenge1.png" alt="" />
    </div>
  );
}

export default HomePage;
