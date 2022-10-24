import "./HomePage.css";

function HomePage() {
  return (
    <div>
			<div>
			<img className="dieta" src="images/dieta.jpg" alt="" />
      <img className="dieta" src="images/dieta1.jpg" alt="" />
			</div>
			<div>
				<h2>¿Qúe es la dieta Keto?</h2>
				<iframe width="99%" height="40%" src="https://www.youtube.com/embed/7DRLUUUO10c" title="¿Qué es la dieta keto? Dieta cetogénica para principiantes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<section>
				<h2>¿Qué incluye?</h2>
				<div className="queIncluye">
					<div className="containerOne">
						<img className="menu" src="images/menu.png" alt="" />
						<p>Guia de Alimentacion</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/menu.png" alt="" />
						<p>Recetas keto y jugos verders para complementar tu reto</p>
					</div >
					<div className="containerOne">
						<img className="menu" src="images/menu.png" alt="" />
						<p>Lista de alimentos de intercampo keto</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/menu.png" alt="" />
						<p>Guia para salir de cetosis correctamente al final del reto</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/menu.png" alt="" />
						<p>Guia de suplementacion correcta en cetosis</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/menu.png" alt="" />
						<p>2 Semanas de inversion y nutricion optima para tu cuerpo</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/menu.png" alt="" />
						<p>Menú "Keto to Go" faciles y keto en casa para tu reto</p>
					</div>
					<div className="containerOne">
						<img className="menu" src="images/menu.png" alt="" />
						<p>Marcas recomendadas</p>
					</div>
				</div>
			</section>
			<article>
				<h2>Tienda en Linea</h2>
				<div className="tienda">
					 <blockquote className="tiendaOne">
					<img className="comida" src="images/comida.jpg" alt="" />
					<p>Nuestros Retos</p>
					 </blockquote>
					 <blockquote className="tiendaOne">
					<img className="comida" src="images/comida.jpg" alt="" />
					<p>Reto 21 dias</p>
					 </blockquote>
					 <blockquote className="tiendaOne">
					<img className="comida" src="images/comida.jpg" alt="" />
					<p>Consulta en linea</p>
					 </blockquote>
					 <blockquote className="tiendaOne">
					<img className="comida" src="images/comida.jpg" alt="" />
					<p>Recetarios</p>
					 </blockquote>
					 <blockquote className="tiendaOne">
					<img className="comida" src="images/comida.jpg" alt="" />
					<p>Productos Recomendados</p>
					 </blockquote>
					 <blockquote className="tiendaOne">
					<img className="comida" src="images/comida.jpg" alt="" />
					<p>Clases en linea</p>
					 </blockquote>
				</div>
			</article>
			<div>
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
				<button className="buttonKeto">Entra al Reto!</button>
			</div>
			<article className="articulo">
				<img src="images/articulo.jpg" alt="" />
				<h3>Beneficios de la dieta Keto</h3>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, excepturi asperiores? Ullam atque blanditiis ut sit minima necessitatibus eaque deserunt quis! Repellat dolorem cupiditate voluptate est quas, mollitia quo ex?</p>
				<a href="">Leer más--></a>
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
			<button className="buttonArticulos">Mas Articulos!</button>
			<h1>KetoChallenge</h1>
    </div>
  );
}

export default HomePage;
