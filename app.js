alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute

//enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 a 10");
    // se chute for igual ao n.s
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }   
    }
}

