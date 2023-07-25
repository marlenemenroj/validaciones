// 1 Validar nombre
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
        const nombrar = nombre.trim();
        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
        console.log("sin limpiar: ", nombre, "y limpio: ", nombrar)  //* Primero comprobar si se cumplen las condiciones para continuar
        if (typeof nombrar !== 'string' || nombrar === "" || !pattern.test(nombrar)) {

                console.log("entro en el if")

                return false
        } else {
                return true
        }

}


console.log(validarNombre(" Marlene Eulalia   "))
console.log(validarNombre("               "))
console.log(validarNombre(" 1487232    8989865  "))





// 2 Validar email
/** Asegurar que el @ esté bien colocada.
 * Que termine en "." y la extensión del servidor. 
 * ¿Aceptar cualquier email que introduzca el usuario? o intentar restringirlo o verificarlo
 */


function validarEmail(email) {
        const correo = email.trim(); //con Trim elimina los espacios sobrantes delante y detrás
        const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        //  console.log ("sin limpiar: ", email, "y limpio: ", correo) [[Para comprobar el código con o sin Trim]]
        if (typeof correo !== 'string' || correo === "" || !pattern.test(correo)) {  //* Primero comprobar si se cumplen las condiciones para continuar

                console.log("entro en el if")

                return false
        } else {
                return true
        }

}

console.log(validarEmail("marle86@hotmail.com"))
console.log(validarEmail("ma&/&rle86@hotmail.com"))
console.log(validarEmail("marle86@hotmail"))



// 3 Validar url 


function validarUrl(direccion) {
        const url = direccion.trim(); //con Trim elimina los espacios sobrantes delante y detrás
        const pattern = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\\+~#?&//=]$/;
        //  console.log ("sin limpiar: ", email, "y limpio: ", correo) [[Para comprobar el código con o sin Trim]]
        if (typeof url !== 'string' || url === "" || !pattern.test(url)) {  //* Primero comprobar si se cumplen las condiciones para continuar

                console.log("entro en el if")

                return false
        } else {
                return true
        }

}

console.log(validarUrl("https://www.notion.so/Documentation-0ab40a6a5104467588ad6d94c79f8919"))//Cambiar el patrón
console.log(validarUrl("ma&/&rle86@hotmail.com"))
console.log(validarUrl("marle86@hotmail"))



// 4 Validar fecha 

function validarFecha(fecha) {  //Recordar que fecha es un 'string'
        const data = fecha.trim()
        const pattern = /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/ //Patrón fecha yyyy-mm-dd

        if (typeof data !== 'string' || data === "" || !pattern.test(data)) {  //* Primero comprobar si se cumplen las condiciones para continuar

                console.log("entro en el if")

                return false
        } else {
                return true
        }

}

console.log(validarFecha("1986-12-18"))
console.log(validarFecha("12/21/86"))
console.log(validarFecha("1986-21-12"))
/**
 * Función para comprobar el patrón de fecha del HTML
 * @returns patrón de fecha
 */
function mirarFecha() {
        console.log("fecha:", document.querySelector("[type=date]").value);
}
/**
*Para buscar la fecha he utilizado el código: document.querySelector("[type=date]").value;
 (Se puede aplicar a otros campos)
 Si además quiero comprobar el tipo de variable se le añade "typeof " delante de "document"
 */


 // 5 Validar tiempo en formato de hora   ¡¡¡¡¡EL FORMATO QUE DEBERÍA SER CORRECTO DEVUELVE FALSE!!!!

function validarTiempo(tiempo) {
        const hora = tiempo.trim()//con Trim elimina los espacios sobrantes delante y detrás
        const pattern = /^[0-2][0-9]:[0-5][0-9]$/;

        if (typeof hora !== Number || hora === "" || !pattern.test(hora)) {  //* Primero comprobar si se cumplen las condiciones para continuar

                console.log("entro en el if")

                return false
        } else {
                return true
        }

}

console.log(validarTiempo('15/45')) //Comprobar diferentes formatos de fecha y hora
console.log(validarTiempo('15:50'))
console.log(validarTiempo('17,58'))

function mirarHora(){
        console.log("hora:", document.querySelector("[type=time]").value);
}

// 6 Validar fecha de nacimiento    !!!PENDIENTE!!

function validarFechaNac(fechaN) {
        const horaN = fechaN.trim; //con Trim elimina los espacios sobrantes delante y detrás
        const pattern = /^[0-2][0-9]:[0-5][0-9]$/;

        if (typeof fechaN !== 'string' || fechaN === "" || !pattern.test(horaN)) {  //* Primero comprobar si se cumplen las condiciones para continuar

                console.log("entro en el if")

                return false
        } else {
                return true
        }

}

//No tiene patrón definido en el HTML: ponerle un Placeholder en el Input correspondiente.
function mirarFechaNac(){
        console.log("fechaNac:", document.querySelector("[type=datetime]").value);
}



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
