import React from 'react'
import "./Pago.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Radio } from '@mui/material';
import { Button } from 'react-bootstrap';

const PagoRecetario = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	return (
		<div>
			<p>Aqui va una imagen promocional para pago de recetario</p>
			<img className='imagen' src="images/ketoChallenge1.png" alt="" />
			<h1 className='margin-bottom'>Reto Keto Challenge</h1>
			<div className='formularioPago'>
				<h2>Pago Recetarios</h2>
				<form action="" className='margin-bottom'>
					<h3 className='form margin-top margin-bottom'>Ingresa tu Nombre</h3>
					<input className='estatura' type="text" placeholder='Nombre'  />
					<h3 className='form margin-top margin-bottom'>Apellido</h3>
					<input className='estatura' type="text" placeholder='Apellido' />
					<h3 className='form margin-top margin-bottom'>¿Que recetario deseas?</h3>
					<select  className='estatura' name="estatura" id="estatura">
						<option value="">Elige un Reto</option>
						<option value="reto1">Recetario 1</option>
						<option value="reto2">Recetario 2</option>
						<option value="reto3">Recetario 3</option>
						<option value="reto4">Recetario 4</option>
						<option value="reto5">Recetario 5</option>
						<option value="reto6">Recetario 6</option>
					</select>
					<h3 className='form margin-top margin-bottom'>¿Tienes alguna enfermedad cronica?</h3>
					<input className='estatura' type="text" placeholder='Si(Cual)/No' />
					<h3 className='form margin-top margin-bottom'>¿Tomas algun medicamento?</h3>
					<input className='estatura' type="text" placeholder='Si(Cual)/No' />
				</form>
				<Button className='buttonCompra' href='/pago' variant="outline-primary">Pagar</Button>
			</div>
		</div>
	)
}

export default PagoRecetario