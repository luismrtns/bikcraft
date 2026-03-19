const formulario = document.querySelector('form')

function enviarFormulario(event){
    event.preventDefault() // vai prevenir a ação padrão que seria ir pro "enviar.php" e mudar de tela
    const botao = document.querySelector('form button')
    botao.disabled = true // ajuda a prevenir múltiplos envios do form. Vai desabilitar o botão depois do clique.
    botao.innerText = 'Enviando...'
    const dados = new FormData(formulario) // vai pegar as informações do formulário

    function formularioEnviado(resposta){ // é a resposta enviada pelo servidor
        if(resposta.ok){
            formulario.innerHTML = `
          <p class="md:col-span-2 p-4 rounded border border-green-500 bg-green-50 text-green-800 font-semibold flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            Formulário enviado com sucesso. Aguarde o nosso contato nas primeiras 24 horas.
          </p>`;
        } else {
            formulario.innerHTML = `
          <p class="md:col-span-2 p-4 rounded border border-red-500 bg-red-50 text-red-800 font-semibold flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
            Falha no envio. Nos envie um email para: contato@bikcraft.com.br
          </p>`;
        }
    }

    fetch('./enviar.php', {
        method: 'POST',
        body: dados // é dados pq o FormData já organiza as informações do form
    }).then(formularioEnviado)
}

formulario.addEventListener('submit', enviarFormulario)