function ejercicio1() {
    let numero = document.getElementById("num").value;
    numero = parseInt(numero);
    let r = document.getElementById("resp");
    if (numero % 2 === 0) { 
        console.log(numero + " es par"); 
        r.innerHTML = numero + " es par";
    } else {
        r.innerHTML = numero + " es impar";
    }
}

function ejercicio2() {
    let edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    let r = document.getElementById("resp");
    if (edad >= 18) {
        r.innerHTML = "eres mayor de edad";
    } else {
        r.innerHTML = "eres menor de edad";
    }
}

function ejercicio3() {
    let numero = document.getElementById("num").value;
    numero = parseInt(numero);
    let r = document.getElementById("resp");
    if (numero > 0) {
        r.innerHTML = numero + " es positivo";
    } else if (numero < 0) {
        r.innerHTML = numero + " es negativo";
    } else {
        r.innerHTML = numero + " es cero";
    }
}

// Ejercicio 4: Determinar si un año es bisiesto
// Explicacion:
// • (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0 verifica las reglas de un año bisiesto.

function ejercicio4() {
    let anio = document.getElementById("anio").value;
    anio = parseInt(anio);
    let r = document.getElementById("resp");
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        r.innerHTML = anio + " es un año bisiesto.";
    } else {
        r.innerHTML = anio + " no es un año bisiesto.";
    }
}

// Ejercicio 5: Determinar el mayor de dos números.
// Explicación:
// • numero1 > numero2 verifica si el primer número es mayor.
// • numero1 < numero2 verifica si el segundo número es mayor.
// • Si ninguna de las condiciones anteriores es verdadera, ambos números son iguales.

function ejercicio5() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    let r = document.getElementById("resp");
    if (numero1 > numero2) {
        r.innerHTML = numero1 + " es mayor que " + numero2;
    } else if (numero1 < numero2) {
        r.innerHTML = numero2 + " es mayor que " + numero1;
    } else {
        r.innerHTML = "Ambos números son iguales.";
    }
}

 // Ejercicio 6: Presentar los números pares de n números.
// Explicacion:
// • for (let i = 1; i <= n; i++) itera desde 1 hasta n.
// • if (i % 2 === 0) verifica si i es par.

function ejercicio6() {
    let n = document.getElementById("n").value;
    n = parseInt(n);
    let r = document.getElementById("resp");
    r.innerHTML = "";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (i % 2 === 0) {
                r.innerHTML += i + " es par.<br>";
            } else {
                r.innerHTML += i + " es impar.<br>";
            }
        }
    }
}

    
// Ejercicio 7: Presentar los divisores de un número.
// Explicación:
// • for (let i = 1; i <= numero; i++) itera desde 1 hasta numero.
// • if (numero % i === 0) verifica si i es un divisor de numero.

function ejercicio7() {
    let numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    let r = document.getElementById("resp");
    r.innerHTML = ""; // Limpiar la respuesta antes de agregar nueva información
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    if (divisores.length > 0) {
        r.innerHTML = divisores.join(", ") + " son divisores de " + numero;
    } else {
        r.innerHTML = "No hay divisores de " + numero;
    }
}


// Ejercicio 8: Verificar si un número es perfecto.
// Explicacion
// • for (let i = 1; i < numero; i++) itera desde 1 hasta numero - 1.
// • if (numero % i === 0) verifica si i es un divisor.
// • suma += i suma los divisores.
// • if (suma === numero) verifica si la suma de los divisores es igual al número.

function ejercicio8() {
    let suma = 0;
    let numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    let r = document.getElementById("resp");
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    if (suma === numero) {
        r.innerHTML = numero + " es un número perfecto";
    } else {
        r.innerHTML = numero + " no es un número perfecto";
    }
}


// Ejercicio 9: Verificar si un número es primo.
// • for (let i = 2; i < numero; i++) itera desde 2 hasta numero - 1.
// • if (numero % i === 0) verifica si i es un divisor.
// • esPrimo = false establece que el número no es primo si se encuentra un divisor.
// • if (esPrimo) verifica si el número es primo.

function ejercicio9() {
    let esPrimo = true;
    let numero = document.getElementById("num").value;
    numero = parseInt(numero);
    let r = document.getElementById("resp");

    if (numero <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        r.innerHTML = numero + " es un número primo.";
    } else {
        r.innerHTML = numero + " no es un número primo.";
    }
}



// Ejercicio 10: Invertir un número dividiendo para diez.
// Explicación:
// • while (numero !== 0) itera mientras numero no sea 0.
// • let digito = numero % 10 obtiene el último dígito del número.
// • invertido = invertido * 10 + digito agrega el dígito al número invertido.
// • numero = Math.floor(numero / 10) elimina el último dígito del número original.

function ejercicio10() {
    let invertido = 0;
    let numero = document.getElementById("num").value;
    numero = parseInt(numero);
    let r = document.getElementById("resp");
    while (numero !== 0) {
        let digito = numero % 10;
        invertido = invertido * 10 + digito;
        numero = Math.floor(numero / 10);
    }
    r.innerHTML = "El número invertido es " + invertido;
}


// Ejercicio 11: Multiplicación de dos números por sumas sucesivas.
// Explicación:
// • for (let i = 0; i < numero2; i++) itera numero2 veces.
// • resultado += numero1 suma numero1 a resultado en cada iteración.

function ejercicio11() {
    let numero1 = document.getElementById("num1").value;
    numero1 = parseInt(numero1);
    let numero2 = document.getElementById("num2").value;
    numero2 = parseInt(numero2);
    let resultado = 0;
    let r = document.getElementById("resp");
    for (let i = 0; i < numero2; i++) {
        resultado += numero1;
    }
    r.innerHTML = "El resultado de la multiplicación es " + resultado;
}
    
// Ejercicio 12: División de dos números por restas sucesivas.
// Explicación:
// • while (dividendo >= divisor) itera mientras el dividendo sea mayor o igual al divisor.
// • dividendo -= divisor resta el divisor del dividendo.
// • cociente++ incrementa el cociente en 1 en cada iteración.

function ejercicio12() {
    let dividendo = document.getElementById("dividendo").value;
    dividendo = parseInt(dividendo);
    let divisor = document.getElementById("divisor").value;
    divisor = parseInt(divisor);
    let cociente = 0; // Inicializamos el cociente en 0
    let r = document.getElementById("resp");

    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }
    r.innerHTML = "El cociente de la división es " + cociente;
}

// Ejercicio 13: Presentar la serie de Fibonacci de n números.
// Explicación:
// • for (let i = 2; i < n; i++) itera desde 2 hasta n - 1.
// • let c = a + b calcula el siguiente número de la serie.
// • a = b y b = c actualizan los valores para la siguiente iteración.


function ejercicio13() {
    let n = 10;
    let a = document.getElementById("a").value;
    a = parseInt(a);
    let b = 1;
    let r = document.getElementById("resp");
    r.innerHTML = a + ", " + b;

    for (let i = 2; i < n; i++) {
        let c = a + b;
        r.innerHTML += ", " + c;
        a = b;
        b = c;
    }
}


// Ejercicio 14: Presentar los números múltiplos de 5 de un arreglo .
// Explicación
// • for (let i = 0; i < numeros.length; i++) itera a través del arreglo.
// • if (numeros[i] % 5 === 0) verifica si el número es múltiplo de 5.

function ejercicio14() {
    let numeros = document.getElementById("arreglo").value;
    numeros = numeros.split(";");
    let r = document.getElementById("resp");
    let multiplesDeCinco = [];
    let hayMultiplos = false;
    for (let i = 0; i < numeros.length; i++) {
        let num = parseInt(numeros[i]);
        if (!isNaN(num) && num % 5 === 0) {
            multiplesDeCinco.push(num);
            hayMultiplos = true;
        }
    }
    if (numeros.length === 0) {
        r.innerHTML = "El arreglo está vacío.";
    } else if (hayMultiplos) {
        r.innerHTML = "Los múltiplos de 5 son: " + multiplesDeCinco.join(", ");
    } else {
        r.innerHTML = "No hay múltiplos de 5.";
    }
}

// Ejercicio 15: El promedio de los números de un arreglo.
function ejercicio15() {
    let numerosString = document.getElementById("arreglo").value;
    let numeros = numerosString.split(";");
    let suma = 0;
    let r = document.getElementById("resp");
    for (let i = 0; i < numeros.length; i++) {
        let num = parseInt(numeros[i]);
        suma += num;
    }
    if (numeros.length === 0 || isNaN(suma)) {
        r.innerHTML = "No se ingresaron números válidos.";
    } else {
        let promedio = suma / numeros.length;
        r.innerHTML = "El promedio es " + promedio.toFixed(2);
    }
}

// Ejercicio 16: El mayor de los elementos de un arreglo
function ejercicio16() {
    let numerosString = document.getElementById("arreglo").value;
    let numeros = numerosString.split(",").map(Number); // Convertir los elementos a números
    let mayor = numeros[0];
    let r = document.getElementById("resp");

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    r.innerHTML = "El mayor número es " + mayor;
}



// ejercicio 17: Presentar los nombres que no sean "Ana" de un arreglo.
function ejercicio17(){
    let nombres = document.getElementById("arreglo").value
    let nombresSeparados = nombres.split(",")
    let r = document.getElementById("resp")
    let nombresNoAna = []
    for (let i = 0; i < nombresSeparados.length; i++) {
    if (nombresSeparados[i]!== "Ana") {
    r.innerHTML = nombresNoAna.push(nombresSeparados[i]);
    }
    }
}

// ejercicio 18: : Los pares de un arreglo recorridos desde el último elemento al primero
function ejercicio18() {
    let numerosString = document.getElementById("arreglo").value;
    let numeros = numerosString.split(",").map(Number);
    let r = document.getElementById("resp");
    r.innerHTML = "";
    for (let i = numeros.length - 1; i >= 0; i--) {
        if (numeros[i] % 2 === 0) {
            r.innerHTML += numeros[i] + " es par<br>";
        }
    }
}

// Cadenas
// Ejercicio 19: Imprimir cada carácter de una cadena
function ejercicio19() {
    let cadena = document.getElementById("texto").value;
    let r = document.getElementById("resp");
    r.innerHTML = "";
    for (let i = 0; i < cadena.length; i++) {
        r.innerHTML += cadena[i] + "<br>";
    }
}
// Ejercicio 20: Contar las vocales en una cadena
function ejercicio20() {
    let cadena = document.getElementById("texto").value;
    let vocales = "aeiouAEIOU";
    let contador = 0;
    let r = document.getElementById("resp");
    for (let i = 0; i < cadena.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (cadena[i] === vocales[j]) {
                contador++;
                break;
            }
        }
    }
    r.innerHTML = "Número de vocales: " + contador;
}


// Ejercicio 21: Invertir una cadena
function ejercicio21() {
    let cadena = document.getElementById("texto").value;
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    console.log(cadenaInvertida);
    let r = document.getElementById("resp");
    r.innerHTML = "Cadena invertida: " + cadenaInvertida;
}

// Ejercicio 22: Contar palabras en una cadena
function ejercicio22() {
    let cadena = document.getElementById("texto").value.trim();
    let contadorPalabras = 1;
    if (cadena === "") {
        contadorPalabras = 0;
    } else {
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === " ") {
                contadorPalabras++;
            }
        }
    }
    let r = document.getElementById("resp");
    r.innerHTML = "Número de palabras: " + contadorPalabras;
}

// Ejercicio 23: Reemplazar espacios con guiones.
function ejercicio23() {
    let cadena = document.getElementById("texto").value;
    let cadenaModificada = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " ") {
            cadenaModificada += "-";
        } else {
            cadenaModificada += cadena[i];
        }
    }
    let r = document.getElementById("resp");
    r.innerHTML = "Cadena modificada: " + cadenaModificada;
}


// Ejercicio 24: Contar caracteres específicos
function ejercicio24() {
    let cadena = document.getElementById("texto").value;
    let caracter = document.getElementById("caracter").value;
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    let r = document.getElementById("resp");
    r.innerHTML = "El caracter '" + caracter + "' aparece " + contador + " veces.";
}

// Ejercicio 25: Eliminar caracteres específicos
function ejercicio25() {
    let cadena = document.getElementById("texto").value;
    let caracter = document.getElementById("caracter").value;
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== caracter) {
            nuevaCadena += cadena[i];
        }
    }
    let r = document.getElementById("resp");
    r.innerHTML = "Nueva cadena: " + nuevaCadena;
}


// Ejercicio 26: Convertir mayúsculas a minúsculas y viceversa
function ejercicio26() {
    let cadena = document.getElementById("texto").value;
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        let char = cadena[i];
        if (char >= 'a' && char <= 'z') {
            nuevaCadena += String.fromCharCode(char.charCodeAt(0) - 32);
        } else if (char >= 'A' && char <= 'Z') {
            nuevaCadena += String.fromCharCode(char.charCodeAt(0) + 32);
        } else {
            nuevaCadena += char;
        }
    }
    let r = document.getElementById("resp");
    r.innerHTML = "Nueva cadena: " + nuevaCadena;
}


// Ejercicio 27: Eliminar espacios
function ejercicio27() {
    let cadena = document.getElementById("texto").value;
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== " ") {
            nuevaCadena += cadena[i];
        }
    }
    let r = document.getElementById("resp");
    r.innerHTML = "Nueva cadena: " + nuevaCadena;
}

// Ejercicio 28: Contar la longitud de la palabra más larga
function ejercicio28() {
    let cadena = document.getElementById("texto").value;
    let palabraActual = "";
    let longitudMaxima = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " " || i === cadena.length - 1) {
            if (i === cadena.length - 1) {
                palabraActual += cadena[i];
            }
            if (palabraActual.length > longitudMaxima) {
                longitudMaxima = palabraActual.length;
            }
            palabraActual = "";
        } else {
            palabraActual += cadena[i];
        }
    }
    let r = document.getElementById("resp");
    r.innerHTML = "Longitud máxima de palabra: " + longitudMaxima;
}
