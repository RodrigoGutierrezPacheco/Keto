import React from 'react'
import "./Pago.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Radio } from '@mui/material';
import { Button } from 'react-bootstrap';

const Pago = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	return (
		<div>
			<h1>Reto Keto Challenge</h1>
			<div className='formularioPago'>
				<h2>Pago</h2>
				<form action="">
					<h3 className='form'>Ingresa tu Nombre</h3>
					<input className='estatura' type="text" placeholder='Nombre' value='nombre' />
					<h3 className='form'>Apellido</h3>
					<input className='estatura' type="text" placeholder='Apellido' />
					<h3 className='form'>Edad</h3>
					<input className='estatura' type="number" />
					<h3 className='form'>Estatura</h3>
					<select className='estatura' name="estatura" id="estatura">
						<option value="">Selecciona tu Altura</option>
						<option value="1.50-1.70">1.50m-1.70m</option>
						<option value="1.71-1.80">1.71m-1.80m</option>
						<option value="1.81-1.90">1.81m-1.90m</option>
					</select>
					<h3 className='form'>Peso</h3>
					<input className='estatura' type="text" placeholder='Peso en Kg' />
				<FormGroup>
					<h3 className='form'>¿Es tu primer reto?</h3>
      <FormControlLabel value="numeroReto" name='numeroReto' control={<Checkbox/>} label="1er Reto" />
			<FormControlLabel value="numeroReto" name='numeroReto' control={<Checkbox/>} label="2do Reto" />
			<FormControlLabel value="numeroReto" name='numeroReto' control={<Checkbox/>} label="3er Reto" />
			<FormControlLabel value="numeroReto" name='numeroReto' control={<Checkbox/>} label="4to Reto" />
    </FormGroup>
		<h3 className='form'>¿Que reto deseas?</h3>
					<select className='estatura' name="estatura" id="estatura">
						<option value="">Reto</option>
						<option value="reto1">Reto 1</option>
						<option value="reto2">Reto 2</option>
						<option value="reto3">Reto 3</option>
					</select>
					<h3 className='form'>¿Tienes alguna enfermedad cronica?</h3>
					<input className='estatura' type="text" placeholder='Si(Cual)/No' />
					<h3 className='form'>¿Tomas algun medicamento?</h3>
					<input className='estatura' type="text" placeholder='Si(Cual)/No' />
				</form>
				<Button href='/pago' variant="outline-primary">Pagar</Button>
			</div>
		</div>
	)
}

export default Pago