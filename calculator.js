let n1 = document.getElementById('num-1');
let n2 = document.getElementById('num-2');
let mostrar = document.querySelector('.showResult');
let clean = document.querySelector('#clear');

function calc(e){
   
    let operacao = e.value;
    
    let calculo = eval(n1.value+operacao+n2.value);
 
    if(!isNaN(calculo)){
       mostrar.innerHTML = (calculo);
    }
}

function tela(e){
    n1.value = "";
    n2.value = "";
    mostrar.innerHTML = "Resultado";
}