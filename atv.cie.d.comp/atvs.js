
//1
function somaValores(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}


const resultado = somaValores([a, b, c]);
console.log(resultado);

//2
function maiorElemento(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

//3
function numerosPares(array) {
    let contador = 0;
    for ( let i = 0; i < array.length; i++) {
        if (array[i] / 2 === 0) {
            contador++;
        }
    }
    return contador;
}

//4
function mediaAritmetica(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++){
        soma = soma + array[i];
    
    }
    return soma / array.length;
}

//5
function PositivosNegativos(array) {
    let positivos = 0;
    let negativos = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positivos++;
        } else {
            negativos++;
        }
    }

    console.log("Positivos: " + positivos + ", Negativos: " + negativos);
}

//6
function mutiplicarArray(array, numero) {
    const novoArray=[];
    for (let i = 0; i < array.length; i++){
       novoArray=  array[i]*numero;
    }
    return novoArray;
}
