import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Footer from "./components/Footer/Footer";
import Retos from "./pages/Retos/Retos";
import RetoKeto1 from "./pages/Retos/RetoKeto1";
import RetoKeto2 from "./pages/Retos/RetoKeto2";
import RetoKeto3 from "./pages/Retos/RetoKeto3";
import RetoKeto4 from "./pages/Retos/RetoKeto4";
import RetoKeto5 from "./pages/Retos/RetoKeto5";
import RetoKeto6 from "./pages/Retos/RetoKeto6";
import Recetario1 from "./pages/Recetas/Recetario1";
import Recetario2 from "./pages/Recetas/Recetario2";
import Recetario3 from "./pages/Recetas/Recetario3";
import Recetario4 from "./pages/Recetas/Recetario4";
import Recetario5 from "./pages/Recetas/Recetario5";
import Recetario6 from "./pages/Recetas/Recetario6";

import DetalleReto from "./pages/DetalleReto/DetalleReto";
import Recetas from "./pages/Recetas/Recetas";
import Rutinas from "./pages/Rutinas/Rutinas";
import Articulos from "./pages/Articulos/Articulos";
import Balanceado from "./pages/Retos/Balanceado";
import Pago from "./pages/Pago/Pago";
import PagoRecetario from "./pages/Pago/PagoRecetario";
import ProductosRecomendados from "./pages/ProductosRecomendados/ProductosRecomendados";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nosotros from "./pages/Nosotros/Nosotros";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
				<Route path="/retos" element={<Retos/>}/>
				<Route path="/reto-keto1" element={<RetoKeto1/>}/>
				<Route path="/reto-keto2" element={<RetoKeto2/>}/>
				<Route path="/reto-keto3" element={<RetoKeto3/>}/>
				<Route path="/reto-keto4" element={<RetoKeto4/>}/>
				<Route path="/reto-keto5" element={<RetoKeto5/>}/>
				<Route path="/reto-keto6" element={<RetoKeto6/>}/>
				<Route path="/recetario1" element={<Recetario1/>}/>
				<Route path="/recetario2" element={<Recetario2/>}/>
				<Route path="/recetario3" element={<Recetario3/>}/>
				<Route path="/recetario4" element={<Recetario4/>}/>
				<Route path="/recetario5" element={<Recetario5/>}/>
				<Route path="/recetario6" element={<Recetario6/>}/>
				<Route path="/retos/titulo" element={<DetalleReto/>}/>
				<Route path="/recetarios" element={<Recetas/>} />
				<Route path="/rutinas" element={<Rutinas/>}/>
				<Route path="/articulos" element={<Articulos/>}/>
				<Route path="/nosotros" element={<Nosotros/>}/>
				<Route path="/reto-balanceado" element={<Balanceado/>}/>
				<Route path="/productos-recomendados" element={<ProductosRecomendados/>}/>
				<Route path="/pago-retos" element={<Pago/>}/>
				<Route path="/pago-recetario" element={<PagoRecetario/>}/>

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
			<Footer/>
    </div>
  );
}

export default App;
