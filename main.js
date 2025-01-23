const form = document.getElementById ('form-agenda');
const nomeContato = document.getElementById ('nome-contato');
const numeroContato = document.getElementById ('numero-contato');
const emailContato = document.getElementById ('email-contato');
const corpoDaTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const linha = document.createElement('tr');

    linha.innerHTML = `
        <td>${nomeContato.value}</td>
        <td>${numeroContato.value}</td>
        <td>${emailContato.value}</td>
        <td><button class="editar">Editar</button></td>
        <td><button class="excluir">Excluir</button></td>
    `;
    
    corpoDaTabela.appendChild(linha);

    eventoBotoes(linha);

    nomeContato.value = '';
    numeroContato.value = '';
    emailContato.value = '';
});

function eventoBotoes(linha) {
    const botaoExcluir = linha.querySelector('.excluir');
    botaoExcluir.addEventListener('click', function(e) {
        linha.remove();
    });

    const botaoEditar = linha.querySelector('.editar');
    botaoEditar.addEventListener ('click', function(e) {
        const colunas = linha.querySelectorAll('td');
    
            nomeContato.value = colunas[0].innerText;
            numeroContato.value = colunas[1].innerText;
            emailContato.value = colunas[2].innerText;

            linha.remove();

    });
};



