window.onload  = function(){
  let fontSize = document.querySelector("#font-size-selector")
  let lineHeight = document.querySelector("#line-height-selector")
  let backgroundColor = document.querySelector("#background-selector")
  let content = document.querySelector("#content")
  /* Define o tamanho da fonte do conteudo */
  fontSize.addEventListener("change", function(event){
    let tamanhoFonte = event.target.value
    content.style.fontSize = tamanhoFonte.toString() + "px"
  })
  /* Define a altura da linha */
  lineHeight.addEventListener("change", function(event){
    let alturaLinha = event.target.value
    content.style.lineHeight = alturaLinha.toString() + "px"
  })
}
