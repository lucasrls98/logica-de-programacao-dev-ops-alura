alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 29;
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {

    chute = prompt('Escola um número entre 1 e 30');

    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
    }
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`)
        } else {
            alert(`O número secreto é maior que o ${chute}`)
        }
        // tentativas = tentativas + 1;
        tentativas ++
    }
}






// 1)Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// let diaDaSemanaUsuario = prompt('Que dia da semana é hoje?')

// if(diaDaSemanaUsuario === "Sábado" || diaDaSemanaUsuario === "Domingo"){
//     alert('Bom fim de semana')
// }else{
//     alert('Boa Semana')
// }

// 2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// let numeroEscolhido = parseFloat(prompt('Escolha um número positivo ou negativo'));

// let classificacao;

// if (numeroEscolhido < 0) {
//     classificacao = 'negativo';
// } else if (numeroEscolhido === 0) {
//     classificacao = 'nulo';
// } else {
//     classificacao = 'positivo';
// }

// alert(`O número que você escolheu (${numeroEscolhido}), portanto seu número é ${classificacao}`);

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

// let pontuacao = parseFloat(prompt('Qual é a sua pontuação? '))
// let mensagem

// if(pontuacao >= 100){
//     mensagem = 'Parabéns, você venceu!'
// }else{
//     mensagem = 'Tente novamente para ganhar!'
// }

// alert(mensagem)

// 4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// let saldo = 12500.75

// alert(`Seja bem vindo ao App do seu banco! Seu saldo atualizado é R$${saldo}!`)

// 5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// let nomeDoUsuario = prompt('Qual é o seu nome? ')

// alert(`Seja bem vindo ${nomeDoUsuario}!`)