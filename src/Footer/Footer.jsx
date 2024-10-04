import React from 'react';
import imgLinkedin from '../assets/linkedin.webp'
import imgGit from '../assets/git.png'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Mi Empresa</h5>
            <p>
                Aplicacion para manejar gastos de una persona.
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contacto</h5>
            <p>
              <i className="fas fa-home mr-3"></i> Cra 63a #94a - 295
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> admabaga@outlook.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> 321 885 47 56
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Síguenos</h5>
              <div className='redes'>
                   <a href="https://github.com/Admabaga" target='blank'>
                    <li><img src={imgGit} alt="" /></li>
                  </a>
                  <a href="https://www.linkedin.com/in/adrian-mauricio-barrera-garcia-a85881230" target='blank'>
                    <li><img src={imgLinkedin} alt="" /></li>
                  </a>
              </div>
          </div>
        </div>
        <hr className="mb-4"/>
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              © 2024 Derechos reservados:
                <strong className="text-warning" > MiEmpresa.com</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
