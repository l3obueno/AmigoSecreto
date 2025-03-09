const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let nomes = [];

function adicionarAmigo() {
    const nome = inputAmigo.value.trim();

    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    
    if (nomes.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    
    nomes.push(nome);
    atualizarLista();
    inputAmigo.value = ""; 
}

function atualizarLista() {
    listaAmigos.innerHTML = ""; 
    nomes.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    
    if (nomes.length < 2) {
        alert("Adicione pelo menos dois nomes para realizar o sorteio.");
        return;
    }

    
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const amigoSecreto = nomes[indiceSorteado];

    
    resultado.innerHTML = `<li>Amigo secreto: ${amigoSecreto}</li>`;
}