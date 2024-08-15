import { Router } from "express";
import ControladorCrear from "../controladores/ControladorCrear.js"


const enrutadorUsuarios = Router();

enrutadorUsuarios.post('/', ControladorCrear.crearUsuario);
enrutadorUsuarios.get('/:id', ControladorCrear.leerUsuario);
enrutadorUsuarios.get('/', ControladorCrear.leerUsuarios);
enrutadorUsuarios.put('/:id', ControladorCrear.actualizarUsuario);
enrutadorUsuarios.delete('/:id', ControladorCrear.eliminarUsuario);
/* 
servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
}) */

  export default enrutadorUsuarios;