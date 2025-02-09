import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import SubscribeForm from "./SubscribeForm";

function Footer() {
  const navigate = useNavigate();

  // Función para navegar a la página de categoría
  const navigateToCategory = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="">
      <footer className="footer">
      <div className="footer-section">
        <h3>Nosotros</h3>
        <p>Somos un grupo de desarrolladores</p>
        <p>entusiastas y deseosos de aprender.</p>
      </div>

      <div className="footer-section">
        <h3>Links</h3>
        <button onClick={() => navigate("/")}>Inicio</button> {/*Boton que manda a Inicio*/}
        <button onClick={() => navigate("/profile")}>Perfil</button> {/*Boton que manda a Perfil*/}
        <button onClick={() => navigate("/nosotros")}>Nosotros</button> {/*Boton que manda a Perfil*/}
      </div>

      <div className="footer-section">
        <h3>Categorías</h3>
        <button onClick={() => navigateToCategory("Git")}>Git</button>
        <button onClick={() => navigateToCategory("Desarrollo Web")}>Desarrollo Web</button>
        <button onClick={() => navigateToCategory("React")}>React</button>
        <button onClick={() => navigateToCategory("JavaScript")}>JavaScript</button>
      </div>

      <SubscribeForm />

      <div className="footer-bottom">
       <img
        src="https://i.ibb.co/wggkRsK/image-Photoroom.png"
        alt="Logo de la empresa"
        className="footer-logo"
          />
        <p>CodeNet © All Rights Reserved.</p>
        <p>
          <a href="#">Términos de Uso</a> | <a href="#">Política de Privacidad</a> |{" "}
          <a href="#">Manejo de Cookies</a>
        </p>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
