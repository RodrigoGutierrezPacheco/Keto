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
			<p style={{color:'red'}}>Aqui va una imagen referente a promociones en pago de retos</p>
			<img className='imagen' src="images/ketoChallenge1.png" alt="" />
			<h1 className='margin-bottom'>Reto Keto Challenge</h1>
			<div className='formularioPago'>
				<h2>Pago Reto</h2>
				<form action="" className='margin-bottom'>
					<h3 className='form margin-top margin-bottom'>Ingresa tu Nombre</h3>
					<input className='estatura' type="text" placeholder='Nombre'  />
					<h3 className='form margin-top margin-bottom'>Apellido</h3>
					<input className='estatura' type="text" placeholder='Apellido' />
					<h3 className='form margin-top margin-bottom'>Edad</h3>
					<input className='estatura margin-top margin-bottom' type="number" placeholder='Ingresa tu Edad' />
					<h3 className='form margin-top margin-bottom'>Estatura</h3>
					<select className='estatura margin-top margin-bottom' name="estatura" id="estatura">
						<option value="">Selecciona tu Altura</option>
						<option value="1.50-1.70">1.50m-1.70m</option>
						<option value="1.71-1.80">1.71m-1.80m</option>
						<option value="1.81-1.90">1.81m-1.90m</option>
					</select>
					<h3 className='form margin-top margin-bottom'>Peso</h3>
					<input className='estatura' type="text" placeholder='Peso en Kg' />
				<FormGroup>
					<h3 className='form margin-top margin-bottom'>¿Es tu primer reto?</h3>
      <FormControlLabel value="numeroReto" name='numeroReto' control={<Checkbox/>} label="1er Reto" />
			<FormControlLabel value="numeroReto" name='numeroReto' control={<Checkbox/>} label="2do Reto" />
			<FormControlLabel value="numeroReto" name='numeroReto' control={<Checkbox/>} label="3er Reto" />
			<FormControlLabel value="numeroReto" name='numeroReto' control={<Checkbox/>} label="4to Reto" />
    </FormGroup>
		<h3 className='form margin-top margin-bottom'>¿Que reto deseas?</h3>
					<select  className='estatura' name="estatura" id="estatura">
						<option value="">Elige un Reto</option>
						<option value="reto1">Reto 1</option>
						<option value="reto2">Reto 2</option>
						<option value="reto3">Reto 3</option>
						<option value="reto4">Reto 4</option>
						<option value="reto5">Reto 5</option>
						<option value="reto6">Reto 6</option>
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

export default Pago