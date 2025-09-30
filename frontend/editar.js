const urlParametro = new URLSearchParams(window.location.search);
const id = urlParametro.get("id")

console.log("Id do aluno pra editar:", id);

const inputID = document.getElementById("id");
inputID.value = id;

const API = 'http://localhost:3000/alunos'

async function carregarAluno() {
    if (!id) {
        alert("Nenhum aluno selecionado");
        return
    }
    const resposta = await fetch(`${API}/${id}`);
    const ALUNO = await resposta.json();
    console.log(ALUNO);

    document.getElementById("nome").value = ALUNO[0].nome;
    document.getElementById("cpf").value = ALUNO[0].cpf;
    document.getElementById("cep").value = ALUNO[0].cep;
    document.getElementById("uf").value = ALUNO[0].uf;
    document.getElementById("rua").value = ALUNO[0].rua;
    document.getElementById("numero").value = ALUNO[0].numero;
    document.getElementById("complemento").value = ALUNO[0].complemento;
}

carregarAluno()
const formAluno = document.getElementById("form-edicao")


formAluno.addEventListener("submit", atualizar)


async function atualizar (e){
    e.preventDefault()
    alert("funcionou")
}