// Ejercicios para practicar el uso de 'this' en JavaScript

// Ejercicio 1: 'this' en el contexto global
console.log("Ejercicio 1:");
console.log(this === window); // Debería imprimir true en un navegador

// Ejercicio 2: 'this' en métodos de objetos
console.log("\nEjercicio 2:");
const persona = {
    nombre: "Ana",
    edad: 30,
    presentarse: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};
persona.presentarse(); // Debería imprimir: "Hola, mi nombre es Ana y tengo 30 años."

// Ejercicio 3: 'this' en funciones regulares
console.log("\nEjercicio 3:");
function quienSoy() {
    console.log(this);
}
quienSoy(); // En un navegador, debería imprimir el objeto window

// Ejercicio 4: 'this' en funciones flecha
console.log("\nEjercicio 4:");
const objeto = {
    nombre: "Objeto",
    metodoRegular: function() {
        console.log("En método regular:", this.nombre);
        
        const funcionFlecha = () => {
            console.log("En función flecha:", this.nombre);
        };
        funcionFlecha();
    }
};
objeto.metodoRegular();
// Debería imprimir:
// "En método regular: Objeto"
// "En función flecha: Objeto"

// Ejercicio 5: Cambiar el contexto de 'this' con call()
console.log("\nEjercicio 5:");
function saludar() {
    console.log(`Hola, soy ${this.nombre}`);
}

const persona1 = { nombre: "Carlos" };
const persona2 = { nombre: "Diana" };

saludar.call(persona1); // Debería imprimir: "Hola, soy Carlos"
saludar.call(persona2); // Debería imprimir: "Hola, soy Diana"

// Ejercicio 6: 'this' en constructores
console.log("\nEjercicio 6:");
function Coche(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.presentar = function() {
        console.log(`Este coche es un ${this.marca} ${this.modelo}`);
    };
}

const miCoche = new Coche("Toyota", "Corolla");
miCoche.presentar(); // Debería imprimir: "Este coche es un Toyota Corolla"

// Ejercicio 7: 'this' en eventos del DOM (comentado para evitar errores fuera del navegador)
/*
document.getElementById('miBoton').addEventListener('click', function() {
    console.log(this); // 'this' se refiere al elemento que disparó el evento
});
*/

// Ejercicio 8: Pérdida de contexto de 'this'
console.log("\nEjercicio 8:");
const mascota = {
    nombre: "Fido",
    ladrar: function() {
        console.log(`${this.nombre} está ladrando!`);
    }
};

const ladrar = mascota.ladrar;
// ladrar(); // Esto causará un error porque 'this' no está definido

// Solución usando bind()
const ladrarConContexto = mascota.ladrar.bind(mascota);
ladrarConContexto(); // Debería imprimir: "Fido está ladrando!"

// Ejercicio 9: 'this' en clases ES6
console.log("\nEjercicio 9:");
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const juan = new Persona("Juan");
juan.saludar(); // Debería imprimir: "Hola, soy Juan"

// Ejercicio 10: 'this' en métodos de objetos anidados
console.log("\nEjercicio 10:");
const empresa = {
    nombre: "TechCorp",
    departamento: {
        nombre: "Desarrollo",
        obtenerInfo: function() {
            return `${this.nombre} en ${this.nombre}`;
        }
    }
};

console.log(empresa.departamento.obtenerInfo());
// Debería imprimir: "Desarrollo en Desarrollo" (no "Desarrollo en TechCorp")
