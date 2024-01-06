document.addEventListener('DOMContentLoaded', function () {
    function obterDataHora () {
    const data = new Date();
    const dia = String (data.getDate()).padStart (2, '0'); 
    const mes = String (data.getMonth() + 1).padStart (2, '0'); 
    const ano = data.getFullYear();
    const hora = String (data.getHours()).padStart (2, '0');
    const minutos = String (data.getMinutes ()).padStart (2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
    }
    // Atualiza o conteudo do paragrafo com a hora de acesso 
    const horaAcessoElement = document.getElementById('horaAcesso'); 
    horaAcessoElement.textContent = `A tabela foi acessada em: ${obterDataHora()}`;
    });