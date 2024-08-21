import fs from "fs-extra";
import modelopreregistro from "../modelos/modelopreregistro.js";
import multer from "multer";


    const Controladorpreregistro = {
      crearNombre: async (solicitud, respuesta) => {
          try {

            
            const storage = multer.diskStorage({
              destination: 'pictures',
              filename: (req, file, cb) => {
                  cb(null, file.originalname);
              },
          });

          const carga = multer({ storage: storage }).single('foto');

          carga(solicitud, respuesta, async (error) => {
              console.log('Request body:', solicitud.body);
              console.log('Request file:', solicitud.file);

              if (error) {
                  return respuesta.json({
                      resultado: 'failed',
                      mensaje: 'Algo salió mal',
                      datos: null,
                  });
              }
            

              if (!solicitud.file) {
                return respuesta.json({
                    resultado: 'failed',
                    mensaje: 'Archivo no proporcionado',
                    datos: null,
                });
            }

         /*    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])([^\s]|\s){5,}$/;
            if (!passwordRegex.test(contrasenia)) {
              return respuesta.json({
                resultado: "mal",
                mensaje: "La contraseña debe tener al menos 5 caracteres, incluyendo una letra mayúscula, una minúscula, un número y un carácter especial",
              }); */
            
              
   /*          */
   
            const nuevoUsuario = new  modelopreregistro({
              nombre: solicitud.body.nombre,
              apodo: solicitud.body.apodo,
              foto: solicitud.file.filename,
            });
                         const { nombre, apodo,  } = solicitud.body;
            console.log("fields: ", solicitud.body); 
    
            if (nombre.length < 4) {
              return respuesta.json({
                resultado: "mal",
                mensaje: "El nombre debe tener al menos 4 caracteres",
              });
            } 
            
            if (apodo.length < 4) {
              return respuesta.json({
                resultado: "mal",
                mensaje: "El nombre debe tener al menos 4 caracteres",
              });
            } 
          
             try {
              const usuariocreado = await nuevoUsuario.save();
              return respuesta.json({
                  resultado: 'successful',
                  mensaje: 'Libro creado',
                  datos: usuariocreado,
              });
          } catch (saveError) {
              console.error('Error saving book:', saveError);
              return respuesta.json({
                  resultado: 'failed',
                  mensaje: 'Error al guardar el libro',
                  datos: saveError,
              });
          }
        });
          } catch (error) {
              respuesta.json({
              resultado: "mal",
              mensaje: "ocurrió un error al crear usuario preregistro",
              datos: error,
            });
            console.log("error:", error);
          }
        }, 
    }

    export default Controladorpreregistro;