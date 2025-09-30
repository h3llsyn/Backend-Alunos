const urlParametro = new URLSearchParams(window.location.search);
const id = urlParametro.get("id")

console.log("ID do aluno para editar:", id);

const inputID = document.getElementById("id");
inputID.value = id;

const API = 'http://localhost:3000/alunos'


async function carregarAluno() {
    if(!id){
        alert("Nenhum aluno selecionado para edição!");
        return
    }
}

carregarAluno()