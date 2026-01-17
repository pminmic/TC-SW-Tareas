// Clase base `Person` que modela una persona con nombre y DNI.
// Uso de campos privados (#name, #dni) para encapsular datos.
class Person {
    #name = "";
    #dni = 0;

    // Método estático para generar la letra del DNI y devolver
    // la representación completa. Se usa con el número entero del DNI.
    static letraDNI(n) {
        const sec = "TRWAGMYFPDXBNJZSQVHLCKE";
        return n + sec[n % 23];
    }

    // El constructor valida los argumentos recibidos antes de setearlos.
    constructor(n, d) {
        if (typeof n !== "string") {
            throw new Error("No es un nombre válido.");
        }

        // Comprobamos que d sea número y tenga 8 dígitos
        if (typeof d !== "number" || Math.floor(Math.log10(d)) + 1 !== 8) {
            throw new Error("El DNI no es válido, tiene que ser un número!");
        }
        this.#name = n;
        this.#dni = Person.letraDNI(d);
    }

    // Getter para `dni` (lectura pública, dato privado internamente)
    get dni() {
        return this.#dni
    }

    // Setter para `name` (permite cambiar el nombre)
    set name(n) {
        this.#name = n;
    }

    // Getter para `name`
    get name() {
        return this.#name;
    }
    
    // Método de conveniencia que devuelve una cadena informativa
    getInfo() {
        return `${this.name} con DNI: ${this.dni}`
    }
}

// `Member` extiende a `Person` y añade información del departamento
// y años de experiencia. Incluye validación de departamentos.
class Member extends Person {
    // Atributos privados de la clase
    #department = "";
    #yearsExperience = 0;

    // Lista de departamentos válidos para la validación
    static validDepartments = [
        "Management",
        "Operaciones",
        "Avionics",
        "Electromagnetics",
        "Mechanics"
    ];

    constructor(n, d, dep, year) {
        super(n, d);
        if (typeof dep !== "string" || !Member.isValidDepartment(dep)) {
            throw new Error("El departamento introducido no es válido.");
        }

        if (typeof year !== "number" || year < 0) {
            throw new Error("Tienes que introducir un número!");
        }

        this.#department = dep;
        this.#yearsExperience = year;
    }

    // Comprueba si un departamento está en la lista de válidos
    static isValidDepartment(dep) {
        return this.validDepartments.includes(dep);
    }

    // Getter / Setter para `department` con validación en el setter
    get department() {
        return this.#department;
    }

    set department(dep) {
        if (this.isValidDepartment(dep)) {
            this.#department = dep;
        }
        else {
            throw new Error("El departamento introducido no es válido.");
        }
    }

    // Getter para años de experiencia
    get yearsExperience() {
        return this.#yearsExperience;
    }

    // Añade la información del miembro a la salida del padre
    getInfo() {
        return `${super.getInfo()}, del departamento ${this.department} desde ${this.yearsExperience}`;
    }
}

// `Engineer` es un `Member` especializado con una `speciality`.
class Engineer extends Member {
    #speciality = "";

    constructor(n, d, dep, year, s) {
        super(n, d, dep, year);
        if (typeof s !== "string" || s === "") {
            throw new Error("Tiene que tener una especialidad!");
        }
        this.#speciality = s;
    }

    // Getter para la especialidad
    get speciality() {
        return this.#speciality;
    }

    // Añadimos la especialidad a la información del miembro
    getInfo() {
        return `${super.getInfo()}, especialista en ${this.speciality}`;
    }
}

// Clase `Team` que mantiene una lista de `Member` y operaciones sobre el equipo.
class Team {

    #members = [];

    constructor() {
        this.#members = [];
    }

    // Añade un miembro si es instancia de `Member`, sino lanza error
    addMember(member) {
        if (member instanceof Member) {
            this.#members.push(member);
        }
        else {
            throw new Error("Tiene que ser de clase Member!!!");
        }
    }

    // Elimina miembros por DNI (coincidencia exacta de la cadena dni)
    removeMemberbyDni(d) {
        this.#members = this.#members.filter(m => m.dni !== d);
    }

    // Lista todos los miembros en consola usando `getInfo()`
    listMember() {
        this.#members.map(m => console.log(m.getInfo()));
    }

    // Cuenta miembros por departamento
    countMembersByDepartment(dep) {
        return this.#members.filter(m => m.department === dep).length;
    }

    // Lista (en consola) los miembros de un departamento dado
    // Recomendado por el profesor
    listMembersByDepartment(dep) {
        this.#members.filter(m => m.department === dep).map(m => console.log(m.getInfo()));
    }
}

// ===================== ZONA DE USO / TESTS =====================
// A continuación se crean instancias para demostrar el uso de las clases
// y para servir como pruebas manuales (salida por consola).

const ingeniero1 = new Engineer("Pau", 23456789, "Avionics", 1, "Raíles");
const ingeniero2 = new Engineer("Ivan", 12345678, "Operaciones", 2, "Bolsa de valores");

const miembro = new Member("Mario", 34567890, "Management", 0);

const equipo = new Team();

equipo.addMember(ingeniero1);
equipo.addMember(ingeniero2);
equipo.addMember(miembro);

console.log("Uso del GETTER");
console.log(`ingeniero1.dni = ${ingeniero1.dni}\n`);
console.log("Uso del SETTER");
ingeniero1.name = "Pao";
console.log(`ingeniero1.name("Pao") -> ${ingeniero1.name}\n`);  
console.log("Prueba de método estático de validación");
console.log(`Member.isValidDepartment("Management") = ${Member.isValidDepartment("Management")}\n`);

console.log("Lista de los MIEMBROS")
equipo.listMember();

console.log("\nNúmero de miembros por departamento")
Member.validDepartments.map(n => console.log(`${n}: ${equipo.countMembersByDepartment(n)}`));


// Para probar errores, descomentar una a una las siguientes secciones.
// Están dejadas como ejemplos de casos que deberían lanzar excepciones.

/*
console.log("\nPRUEBA ERRORES");
*/

/*
console.log(`const miembro2 = new Member("Luca", 78912345, "Contabilidad", 4);`);
const miembro2 = new Member("Luca", 78912345, "Contabilidad", 4);
console.log(miembro2.getInfo());
*/

/*
console.log("Intento de añadir un objeto diferente a Member en 'equipo' (clase Team).");
console.log(`equipo.addMember(3);`)
equipo.addMember(3);
*/