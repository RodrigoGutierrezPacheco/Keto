import React from 'react'
import { useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Radio } from '@mui/material';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalButtonsComponentProps } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { redirect } from 'react-router-dom';
import { Details } from '@mui/icons-material';

const RetoKeto1 = () => {
	const amount = ".01";
  const currency = "MXN";
  const style = {"layout":"vertical"};

	const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
								onApprove={(data,actions) => {
									return actions.order.capture().then(function (details){
										console.log("Pago aprobado")
									})
								}}
            />
        </>
    );
}


	const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
	console.log(process.env.REACT_APP_PAYPAL_CLIENT_ID)
	return (
		<div className="body">
			<h1>Reto Keto 1</h1>
			<img className="retoBalanceado" src="images/Dieta1.png" alt="" />
			<p className='margin-top margin-bottom'>¡¡Aprovecha nuestro descuento de 50%!!</p>
			<div className='container'>
			<h4>¿QUÉ ES EL RETO KETO 1?</h4>
			<p>*El reto balanceado es Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, esse. Excepturi cupiditate corporis quasi, odio labore nostrum nemo doloribus iure provident quibusdam aspernatur. Quo, dignissimos! Inventore, nostrum! Necessitatibus, sint asperiores.
			</p>
			<p>El reto Balanceado incluye seguimiento si es que quieres realizar ayuno intermitente</p>
			</div>
			<section className='margin-top margin-bottom'>
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
			<div className='bgColor'>
			<h3>Beneficios</h3>
			<ul className="lista margin-bottom">
				<li>Beneficio 1</li>
				<li>Beneficio 2</li>
				<li>Beneficio 3</li>
				<li>Beneficio 4</li>
				<li>Beneficio 5</li>
				<li>Beneficio 6</li>
				<li>Beneficio 7</li>
				<li>Beneficio 8</li>
				<li>Beneficio 9</li>
				<li>Beneficio 10</li>
			</ul>
			</div>
			<div className='margin-top margin-bottom'>
			<Button href='/pago-retos' variant="outline-primary">unete</Button>
			<PayPalScriptProvider options={{"client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID,components:"buttons", currency:"MXN" }}>
				<PayPalButtons
				createOrder={(data,actions) => {
					return actions.order.create({
						purchase_units:[
							{
								amount:{
									value:amount
								},
							},
						],
					});
				}}
				/>
			</PayPalScriptProvider>
			<h3 className='margin-top margin-bottom'>Preguntas Frecuentes</h3>
			<div className="preguntas">
			<Accordion>
      <Accordion.Item eventKey="1" className='preguntas1' style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>¿Puedo comer dulces?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item >
			<Accordion/>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>¿Puedo Tomar?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			</Accordion>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>¿Debo dejar de comer?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			</Accordion>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>Siento que me falta mas comida</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			</Accordion>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>Los alimentos no me gustan</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			</Accordion>
			<Accordion>
      <Accordion.Item eventKey="1" style={{backgroundColor: '#a3d8ff', color:'white'}}>
        <Accordion.Header>Me siento mas debil</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
		</Accordion>
    </div>
		</div>
			</div>
	)
}

export default RetoKeto1