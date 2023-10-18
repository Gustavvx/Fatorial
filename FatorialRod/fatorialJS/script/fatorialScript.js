let fatorial = 1; 
const btn = document.querySelector("#enviar");

function fatCalc(n) { // calculo da função fatorial
    for (n; n >= 1; n--) {
        fatorial = fatorial * n;
    }
    return fatorial;
}


 btn.addEventListener("click", function (e) {  //evento sobre o valor do numero a ser fatoriado
   e.preventDefault();

   const number = document.querySelector("#numb");

   const n = number.value;

   muda_h2(fatCalc(n));
   fatorial = 1;
});

function muda_h2(fatorial) { // mostra o resultado  do fatorial
   var h2 = document.getElementById('result');
   h2.innerHTML = fatorial;
}
