function esPrimo(valor) {

    if (valor == 1 || valor == 2) { // Si es el 1 o el 2 es primo
        return true;
    } else {
        let primo = true;  // supongo que el número es primo
        for (let div = 2; div < valor; div++) {
            if (valor % div == 0) { // si encuentro un div que lo divida 
                primo = false; // cambio la variable primo a false
            }
        }
        return primo; // tiene el valor booleano true o false.
    }
}

let codigo = ('la respuesta esta en el interior de vuestros corazones').toLocaleLowerCase();
let abc = 'abcdefghijklmnopqrstuvwxyz';
let codArr = [];
let abcArr = [];
let primo;
let boolPrim = [];
let boolPar = [];
let par;


//CODIFICACION:
//Pasar las letras a un array
for (let i = 0; i < codigo.length; i++) {
    codArr[i] = codigo[i];
}

//Le da la vuelta al array de las letras para leerlo invertido
const codRev = codArr.reverse();

//Recorre todo el array de letras Revertido
for (let j = 0; j < codigo.length; j++) {

    //Cambia las letras por numero dependiendo de su posicion en el array y le suma 3
    for (i = 0; i < abc.length; i++) {
        if (codRev[j] == abc[i]) {
            codRev[j] = (i + 3);
        }
    }

    //Si es par al numero le suma 7 y tambien almacena en un array de booleanos cuales ha utilizado como pares y cuales como impares
    par = false
    if (codRev[j] % 2 != 0) {
        codRev[j] = codRev[j] + 7;
        par = true;
    }
    boolPar[j] = par

    //Si no es primo coge el numero y lo multiplica por 3 y almacena un array de booleanos cuales ha utilizado como primos y cuales como no primos
    valor = codRev[j];
    primo = esPrimo(valor);
    if (primo == false) {
        codRev[j] = codRev[j] * 3;
    }
    boolPrim[j] = primo;

    //Los numeros que sean un 14 los cambia por un 4
    if (codRev[j] == 14) {
        codRev[j] = '4';
    }

    //Los espacios los cambia por un 23
    if (codRev[j] == ' ') {
        codRev[j] = '23';
    }

    //Los numeros 70 por el numero 15
    if (codRev[j] == 70) {
        codRev[j] = '15';
    }
}

//Visualiza el codigo encriptado
console.log(codRev.toString());

//DECODIFICACION:
for (let j = 0; j < codigo.length; j++) {

    //Los 4 por 14
    if (codRev[j] == 4) {
        codRev[j] = '14';
    }

    //Los 23 los cambia por espacios
    if (codRev[j] == '23') {
        codRev[j] = ' ';
    }

    //Los 15 por 70
    if (codRev[j] == 15) {
        codRev[j] = '70';
    }

    //Para saber los no primos y lo dividimos por 3
    if (boolPrim[j] == false) {
        codRev[j] = codRev[j] / 3;
    }

    //Para saber los pares y les restamos 7
    if (boolPar[j] == true) {
        codRev[j] = codRev[j] - 7;
    }

}
//Revertimos el codigo
codArr = codRev.reverse();

//Convertir las letras a numeros y "undefineds" a espacios
for (i = 0; i < codRev.length; i++) {
    codRev[i] = abc[codRev[i] - 3];
    if (codRev[i] == null) {
        codRev[i] = ' ';
    }
}

//Visualizar el codigo 
console.log(codArr.toString());