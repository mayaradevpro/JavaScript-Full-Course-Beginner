let hipotenusa;
let catetoAdjancente;
let catetoOposto;
 
//catetoAdjancente = window.prompt("Digite o valor do cateto adjacente")
//catetoAdjacente = Number(catetoAdjancente);

//catetoOposto = window.prompt("Digite o valor do cateto oposto")
//catetoOposto = Number(catetoOposto);

document.getElementById("submitButton").onclick = function () {
    catetoAdjancente = document.getElementById("catetoADTextBox").value;
    console.log(typeof catetoAdjancente)
    catetoAdjancente = Number(catetoAdjancente);
    console.log( typeof catetoAdjancente);

    catetoOposto = document.getElementById("catetoOPTextBox").value;
    catetoOposto = Number(catetoOposto);
    console.log(catetoOposto);

    hipotenusa = Math.sqrt(
        Math.pow(catetoAdjancente, 2) + Math.pow(catetoOposto, 2)
    );

    document.getElementById("hipotenusa").innerHTML = 
    " A hipotenusa tem valor:" + hipotenusa;
};