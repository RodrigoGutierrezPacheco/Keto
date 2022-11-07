import React from 'react'
import "./Pago.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Pago = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	return (
		<div>
			<h1>Reto Keto Challenge</h1>
			<div className='formularioPago'>
				<h2>Reto</h2>
				<form action="">
					<h3 className='form'>Ingresa tu Nombre</h3>
					<input className='estatura' type="text" placeholder='Nombre' />
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
				</form>
				<FormGroup>
					<h3 className='form'>¿Es tu primer reto?</h3>
      <FormControlLabel control={<Checkbox/>} label="1er Reto" />
			<FormControlLabel control={<Checkbox/>} label="2do Reto" />
			<FormControlLabel control={<Checkbox/>} label="3er Reto" />
			<FormControlLabel control={<Checkbox/>} label="4to Reto" />
    </FormGroup>
			</div>
		</div>
	)
}

export default Pago