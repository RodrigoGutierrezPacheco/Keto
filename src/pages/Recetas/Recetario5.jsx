import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Recetario5 = () => {
	return (
		<div >
			<h1 className='recetarioContainer'>Recetario 5</h1>
			<img  className='recetasImg' src="images/RecetasKeto.png" alt="" />
			<div className='recetarioContainer'>
			<p className='precio'>$99 MXN</p>
			<img className='ofertaPng' src="images/descuento.png" alt="" />
			<p><strike>$400MXN</strike> ahorra un 75%</p>
			</div>
			<Form  className='formRecetario'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Introduce tu Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="password" placeholder="Introduce tu Apellido" />
      </Form.Group>
      <Button className='buttonRecetarios' variant="primary" type="submit">
        Comprar
      </Button>
    </Form>
		<div className='recetarioContainer'>
		<p className='recetarioContainer'>Recetario Keto 5 con 20 Recetas</p>
		<p className='nuestrasRecetas'>Nuestras Recetas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae provident placeat tempore harum enim laborum, obcaecati optio maiores soluta, doloremque, inventore eveniet esse magnam ipsa id deleniti quisquam nulla odio!</p>
		<h4>Recetas:</h4>
		<ol>
			<li>Receta 1</li>
			<li>Receta 2</li>
			<li>Receta 3</li>
			<li>Receta 4</li>
			<li>Receta 5</li>
			<li>Receta 6</li>
			<li>Receta 7</li>
			<li>Receta 8</li>
			<li>Receta 9</li>
			<li>Receta 10</li>
			<li>Receta 11</li>
			<li>Receta 12</li>
			<li>Receta 13</li>
			<li>Receta 14</li>
			<li>Receta 15</li>
			<li>Receta 16</li>
			<li>Receta 17</li>
			<li>Receta 18</li>
			<li>Receta 19</li>
			<li>Receta 20</li>
		</ol>
		</div>
		<Button className="buttonAyudaCompras" variant="outline-primary">Ayuda con mi Compra</Button>
		<img className="ketoImg" src="images/ketoChallenge1.png" alt="" />
		</div>
	)
}

export default Recetario5