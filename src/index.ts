
// Ejercicio 1
console.log("----- Ejercicio 1 ------");

function numberAString(numeroIngresado: any): string {
    try {
        if (typeof numeroIngresado === 'number' && !isNaN(numeroIngresado)) {
            return numeroIngresado.toString();
        } else {
            throw new Error('Ingresa un número valido.');
        }
    } catch (error) {
        return error.message;
    }
}

console.log(numberAString(123));
console.log(numberAString('123'));
console.log(numberAString(NaN));
console.log(numberAString(456.78));



// Ejercicio 2
console.log("\n ---------- Ejercicio 2 -------");

function getElementAt<T>(arr: T[], index: number): T | string {
    try {
        if (index >= 0 && index < arr.length) {
            return arr[index];
        } else {
            throw new Error('Índice fuera de rango.');
        }
    } catch (error) {
        return error.message;
    }
}

// Ejemplos de uso
let array = [10, 20, 30, 40, 50];

console.log(getElementAt(array, 2));
console.log(getElementAt(array, 5)); 
console.log(getElementAt(array, -1)); 


// Ejercicio 3 (El ejercicio 3 es igual al ejercicio 1)
console.log("\n ----------- Ejercicio 3 -------")


console.log(numberAString(123));
console.log(numberAString('123'));
console.log(numberAString(NaN));
console.log(numberAString(456.78));


// Ejercicio 4
console.log("\n ------- Ejercicio 4 -------- ")
function calcularAreaT(base: number, altura: number): number | string {
    try {
        if (base < 0 || altura < 0) {
            throw new Error('La base y la altura no puden ser números negativos.');
        }
        return "El area del triangulo es: " + (base * altura) / 2;
    } catch (error) {
        return error.message;
    }
}

console.log(calcularAreaT(10, 5));
console.log(calcularAreaT(-10, 5)); 
console.log(calcularAreaT(10, -5));

// ejercicio 5

console.log("\n----------- Ejercicio 5 -------------")

function leerArchivo(nombre: string, data: string) {
    const archivo = abrirArchivo(nombre);
    try {
        if (data === 'error') {
            throw new Error('Error durante la operación con el archivo.');
        }
        console.log(`Leyendo del archivo: ${data}`);
    } catch (error) {
        console.log('Ocurrió un error:', error.message);
    } finally {
        cerrarArchivo(archivo);
    }
}

function abrirArchivo(nombre: string) {
    console.log(`Abriendo archivo: ${nombre}`);
    return { nombre: nombre }; 
}

function cerrarArchivo(archivo: any) {
    console.log(`Cerrando archivo: ${archivo.nombre}`);
}

leerArchivo('archivo1.txt', 'Hola, mundo!');
leerArchivo('archivo2.txt', 'error'); 


// ejercicio 6
console.log("\n-------- Ejercicio 6-------")
function operacionCompleja(x: number, y: number): number {
    if (y === 0) {
        throw new Error('División por cero no permitida.');
    }
    return x / y + Math.sqrt(x);
}

function ejecutarOperacion(x: number, y: number): number | string {
    try {
        return operacionCompleja(x, y);
    } catch (error) {
        return error.message;
    }
}

console.log(ejecutarOperacion(9, 3)); 
console.log(ejecutarOperacion(9, 0));