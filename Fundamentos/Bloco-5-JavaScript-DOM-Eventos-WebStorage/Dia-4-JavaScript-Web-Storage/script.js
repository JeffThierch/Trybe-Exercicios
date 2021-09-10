window.onload  = function(){
  let fontStyleSelector = document.querySelector('#font-selector');
  let fontSize = document.querySelector("#font-size-selector")
  let lineHeight = document.querySelector("#line-height-selector")
  let backgroundColor = document.querySelector("#background-selector")
  let fontColor = document.querySelector("#color-selector")
  let textInsertInput = document.querySelector("#text-insert")
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
  /* Define BackgroundColor */
  backgroundColor.addEventListener("change", function(event){
    let bgColor = event.target.value;
    document.body.style.backgroundColor = bgColor
  })
  /* Define cor da fonte */
  fontColor.addEventListener("change", function(event){
    let colorFont = event.target.value;
    content.style.color = colorFont
  })
  /* Font Style */
  fontStyleSelector.addEventListener("change", function(event){
    let fontStyle = event.target.value
    content.style.fontFamily = fontStyle
  })
  /* Inserir Texto */
  textInsertInput.addEventListener("change", function(event){
    let text = event.target.value
    console.log(text)
    content.innerHTML = text
  })
}