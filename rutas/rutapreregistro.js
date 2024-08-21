import { Router } from "express";
import Controladorpreregistro from "../controladores/controladorpreregistro.js";


const enrutadorPreregistro = Router();

enrutadorPreregistro.post('/', Controladorpreregistro.crearNombre);
enrutadorPreregistro.get('/', Controladorpreregistro.leertodos);
/*
enrutadorPreregistro.get('/', CenrutadorPreregistro.leerUsuarios);
enrutadorPreregistro.put('/:id', enrutadorPreregistro.actualizarUsuario);
enrutadorPreregistro.delete('/:id', enrutadorPreregistro.eliminarUsuario); */
/* 
servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
}) */

  export default enrutadorPreregistro;