// Validar nombre
        /** Verificar que es un String.
         * Verificar que todo lo que hay en el String sean sólo letras/que no hay números u otros caracteres especiales.
         */


       /**
        * Función para validar un texto
        * @param {string} nombre 
        * @returns {boolean} boolean true or false
        * 
        */

        function validarNombre(nombre) {
                const nombrar  = nombre.trim();
                const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
                console.log ("sin limpiar: ", nombre, "y limpio: ", nombrar)  //* Primero comprobar si se cumplen las condiciones para continuar
                if (typeof nombrar, !== 'string'  || nombrar === "" || !pattern.test(correo)){ 
                        
                console.log("entro en el if")
        
                        return false
                } else {
                        return true
                }
                        
        }
                
       
        console.log (validarNombre(" Marlene Eulalia   "))
        console.log (validarNombre("               "))
        console.log (validarNombre(" 1487232    8989865  "))





// Validar email
        /** Asegurar que el @ esté bien colocada.
         * Que termine en "." y la extensión del servidor. 
         * ¿Aceptar cualquier email que introduzca el usuario? o intentar restringirlo o verificarlo
         */


        function validarEmail(email) {
                const correo  = email.trim(); //con Trim elimina los espacios sobrantes delante y detrás
                const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
              //  console.log ("sin limpiar: ", email, "y limpio: ", correo) [[Para comprobar el código con o sin Trim]]
                if (typeof correo !== 'string'  || correo === "" || !pattern.test(correo)){  //* Primero comprobar si se cumplen las condiciones para continuar
                        
                console.log("entro en el if")
        
                        return false
                } else {
                        return true
                }
                        
        }
        
        console.log(validarEmail("marle86@hotmail.com"))
        console.log(validarEmail("ma&/&rle86@hotmail.com"))
        console.log(validarEmail("marle86@hotmail"))



// Validar url 


function validarUrl(direccion) {
        const url  = direccion.trim(); //con Trim elimina los espacios sobrantes delante y detrás
        const pattern = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\\+~#?&//=]$/;
      //  console.log ("sin limpiar: ", email, "y limpio: ", correo) [[Para comprobar el código con o sin Trim]]
        if (typeof url !== 'string'  || url === "" || !pattern.test(url)){  //* Primero comprobar si se cumplen las condiciones para continuar
                
        console.log("entro en el if")

                return false
        } else {
                return true
        }
                
}

console.log(validarUrl("https://www.notion.so/Documentation-0ab40a6a5104467588ad6d94c79f8919"))//Cambiar el patrón
        console.log(validarUrl("ma&/&rle86@hotmail.com"))
        console.log(validarUrl("marle86@hotmail"))

        

// Validar fecha 


// Validar tiempo 
// Validar fecha de control 
// Validar mes 
// Validar semana 
// Validar intervalo 
// Validar intervalo 
// Validar número de teléfono 
        /** Verificar que es un número.
         * Limitar la entrada de números a 9.
         */

// Validar término 
// Validar número color 
