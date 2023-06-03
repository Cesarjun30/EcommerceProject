import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        {/*fist row*/}
        <div className="col-left-side" id="col-left-side">
          <div className="row-footer" id="row-footer">
            <h6>Company Info</h6>
            <ul>
              <li>
                <a href="#">About 'nombre de compañia</a>
              </li>
              <li>
                <a href="#">Fashion Blogger</a>
              </li>
              <li>
                <a href="#">Supply Chain</a>
              </li>
              <li>
                <a href="#">Responsabilidad Social</a>
              </li>
            </ul>
          </div>
        </div>

        {/*second row*/}

        <div className="col-center-side" id="col-center-side">
          <div className="row-footer" id="row-footer">
            <h6>Help & Support</h6>
            <ul>
              <li>
                <a href="#">Información de envío</a>
              </li>
              <li>
                <a href="#">Devoluciones</a>
              </li>
              <li>
                <a href="#">Guía de tamaño</a>
              </li>
              <li>
                <a href="#">Como traquear</a>
              </li>
            </ul>
          </div>
        </div>

        {/*third row*/}

        <div className="col-right-side" id="col-right-side">
          <div className="row-footer" id="row-footer">
            <h6>Customer Care</h6>
            <ul>
              <li>
                <a href="#">Contáctanos</a>
              </li>
              <li>
                <a href="#">Pagos e impuestos</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
