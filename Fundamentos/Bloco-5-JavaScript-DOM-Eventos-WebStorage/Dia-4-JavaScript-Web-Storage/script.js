window.onload  = function(){
  let fontSize = document.querySelector("#font-size-selector")
  let lineHeight = document.querySelector("#line-height-selector")
  let content = document.querySelector("#content")
  /* Define o tamanho da fonte do conteudo */
  fontSize.addEventListener("change", function(event){
    let tamanhoFonte = event.target.value
    content.style.fontSize = tamanhoFonte.toString() + "px"
  })

}
