import { Schema } from "mongoose"; // es lo que permite decirme cual es la estructura del documento
import { model } from "mongoose";

// vamos a crear un esquema

const esquemaCrearUsuario = new Schema( // estoy creando un esquema estrcuctura de como ingresan los datos
    {
        nombre: {type: String, require: true},
        apellido:{type: String, require: true},
        correo: {type: String, require: true},
        contrasenia: {type: String, require: true},
        contraseniaconfirm: {type: String, require: true},
        telefono:  {type: Number},
});


export default model("CrearUsuario", esquemaCrearUsuario); // Lo exporto este es el modelo 