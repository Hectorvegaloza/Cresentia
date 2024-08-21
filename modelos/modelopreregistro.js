import { Schema } from "mongoose"; // es lo que permite decirme cual es la estructura del documento
import { model } from "mongoose";

// vamos a crear un esquema

const esquemapreregistro = new Schema( // estoy creando un esquema estrcuctura de como ingresan los datos
    {
        nombre: {type: String, require: true},
        apodo:{type: String, require: true},
        foto: {type: String,require: true}
}, {versionKey: false, timestamps: true});


export default model("preregistro", esquemapreregistro); // Lo exporto este es el modelo 