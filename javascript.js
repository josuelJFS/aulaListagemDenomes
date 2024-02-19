let listagemDeNomes = [];
function cadastrarPessoa() {
    let nome = document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let cpf = document.querySelector("#cpf").value;
    let sexo = document.querySelector("#sexo").value;
    listagemDeNomes.push({ nome: nome, idade: idade, cpf: cpf, sexo: sexo });
    inserirListagem();
    salvarListagem();
}

function inserirListagem() {
    let containerLista = document.querySelector(".containerLista");
    containerLista.innerHTML = listagemDeNomes
        .map((object) => {
            return `
            <div class="item">
                <div class="item-list-container">
                    <div class="label">Nome</div>
                    <div class="valor">${object.nome}</div>
                </div>
                <div class="item-list-container">
                    <div class="label">Idade</div>
                    <div class="valor">${object.idade}</div>
                </div>
                <div class="item-list-container">
                    <div class="label">Cpf</div>
                    <div class="valor">${object.cpf}</div>
                </div>
                <div class="item-list-container">
                    <div class="label">Sexo</div>
                    <div class="valor">${object.sexo}</div>
                </div>
            </div>
        `;
        })
        .join("");
}

function salvarListagem() {
    localStorage.setItem("listagem", JSON.stringify(listagemDeNomes));
}

function carregarListagem() {
    listagemDeNomes = JSON.parse(localStorage.getItem("listagem"));
}

window.addEventListener("load", () => {
    carregarListagem();
    inserirListagem();
});
