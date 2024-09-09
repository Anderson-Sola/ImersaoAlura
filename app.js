
function BUSCAR() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for vazio  uma string sem nada
    if(campoPesquisa == ""){
      section.innerHTML = "Nenhum Item foi Encontrado!"
      return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p>${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>`}
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }}
