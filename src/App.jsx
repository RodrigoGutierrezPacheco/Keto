import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Footer from "./components/Footer/Footer";
import Retos from "./pages/Retos/Retos";
import DetalleReto from "./pages/DetalleReto/DetalleReto";
import Recetas from "./pages/Recetas/Recetas";
import Rutinas from "./pages/Rutinas/Rutinas";
import Articulos from "./pages/Articulos/Articulos";
import Pago from "./pages/Pago/Pago";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
				<Route path="/retos" element={<Retos/>}/>
				<Route path="/retos/titulo" element={<DetalleReto/>}/>
				<Route path="/recetas" element={<Recetas/>} />
				<Route path="/rutinas" element={<Rutinas/>}/>
				<Route path="/articulos" element={<Articulos/>}/>
				<Route path="/pago" element={<Pago/>}/>

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
