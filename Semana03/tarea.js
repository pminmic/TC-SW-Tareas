// Ejercicio 1
console.log("\nEJERCICIO 1\n");
let arrOriginal = [3, 4, 2, 4, 4, 5, 12, 24, 3, 23, 232, 2, -3, -9, 2, -23, 200, -23, 12, 43, 4, -32, -32, 0, 23, 23];
console.log(arrOriginal);

// Ejercicio 2
console.log("\nEJERCICIO 2\n");
arrOriginal.map(n => {console.log("En el subsistema de software somos", n, "miembros");});

// Ejercicio 3
console.log("\nEJERCICIO 3\n");
let arrPositivos = arrOriginal.filter(n => n > 0);
arrPositivos.map(n => {console.log("En el subsistema de software somos", n, "miembros");});
console.log(arrPositivos);

// Ejercicio 4
console.log("\nEJERCICIO 4\n");
let arrValidos = arrPositivos.filter(n => n < 11);
arrValidos.map(n => {console.log("En el subsistema de software somos", n, "miembros");});
console.log(arrValidos);

// Ejercicio 5
console.log("\nEJERCICIO 5\n");
let arrFiltrado = arrOriginal.filter(n => n > 0 && n%2 === 0 && n < 100);
arrFiltrado.map(n => {console.log("En el subsistema de software somos", n, "miembros");});
console.log(arrFiltrado);

// Ejercicio 6
console.log("\nEJERCICIO 6\n");
let arrCubos = arrFiltrado.map(n => n**3);
console.log(arrCubos);
let arrCubosFiltrados = arrCubos.filter(n => n % 10 == 0);
console.log(arrCubosFiltrados);

// Ejercicio 7
console.log("\nEJERCICIO 7\n");
let arrFinal = [...arrCubosFiltrados, 21];
console.log(arrFinal);

// Ejercicio 8
console.log("\nEJERCICIO 8\n");
let arrCopia = [...arrFinal];
console.log(arrCopia);
