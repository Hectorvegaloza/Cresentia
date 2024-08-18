import { Router } from "express";
import ControladorLogin from "../controladores/ControladorLogin.js";


const enrutadorInicioSesion = Router(); /* ASI SE CREA UN ENRUTADOR */



enrutadorInicioSesion.post('/', ControladorLogin.inciarSesion);
enrutadorInicioSesion.get('/:token', ControladorLogin.validarToken);

 
export default enrutadorInicioSesion;