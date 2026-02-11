document.write("Una agenda");
let opcion = parseInt(prompt("Escoge una opción del \n 1- Agregar 2- Listar 3- Salir"));
document.writeln(opcion);
let seguir = true;
let datos = [];
while(seguir) {
let opcion = parseInt(prompt("Escoge una opción del \n 1- Agregar 2- Listar 3- Salir"));
    switch(opcion) {
        case 1:
            alert("Escogiste la opcion 1");
            let nombre = prompt("Ingresa tu nombre");
            datos.push(nombre);
            console.table(datos);
            break;
        case 2:
            alert("Escogiste la opcion");
            break;
        case 3:
            alert("Escogiste la opcion Salir");
            seguir = false;
            break;
        default:
            alert("No recibí una opción válida");
            break;
    }
}
