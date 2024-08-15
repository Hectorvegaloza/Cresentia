/* import path from "path"; */
import express from "express";
import cors from "cors";
import rutacrearcuenta from "./rutas/rutacrearcuenta.js";
import morgan from "morgan";

/* const express = require("express") --- forma antigua */

const servidor = express();

servidor.use(cors());
servidor.use(express.json()); // para recibir json de los servidorres
servidor.use(morgan("dev"));
servidor.use("/login",rutacrearcuenta);  // raiz del programa


servidor.get("/", (solicitud,respuesta)=>{
    respuesta.json({
         Mensaje: "Trabajando"
    })
});

export default servidor;