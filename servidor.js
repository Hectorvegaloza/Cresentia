/* import path from "path"; */
import express from "express";
import cors from "cors";
import rutacrearcuenta from "./rutas/rutacrearcuenta.js";
import enrutadorInicioSesion from "./rutas/rutaInicioSesion.js";
import enrutadorPreregistro from "./rutas/rutapreregistro.js";
import morgan from "morgan";

/* const express = require("express") --- forma antigua */

const servidor = express();

servidor.use(cors());
servidor.use(express.json()); // para recibir json de los servidorres
servidor.use(morgan("dev"));
servidor.use("/crearcuenta",rutacrearcuenta);  // raiz del programa
servidor.use("/inicio-sesion",enrutadorInicioSesion);  // raiz del programa
servidor.use("/perfil",enrutadorPreregistro);  // raiz del programa

servidor.get("/", (solicitud,respuesta)=>{
    respuesta.json({
         Mensaje: "Trabajando"
    })
});

export default servidor;