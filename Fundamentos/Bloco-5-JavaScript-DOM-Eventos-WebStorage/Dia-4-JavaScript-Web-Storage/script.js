window.onload  = function(){
  let fontFamilySelector = document.querySelector('#font-selector');
  let fontSizeSelector = document.querySelector("#font-size-selector")
  let lineHeightSelector = document.querySelector("#line-height-selector")
  let backgroundColorSelector = document.querySelector("#background-selector")
  let fontColorSelector = document.querySelector("#color-selector")
  let textInsertInput = document.querySelector("#text-insert")
  let content = document.querySelector("#content")
  /* Define o tamanho da fonte do conteudo */
  fontSizeSelector.addEventListener("change", function(event){
    let fontSizeValue = event.target.value
    content.style.fontSize = fontSizeValue.toString() + "px"
  })
  /* Define a altura da linha */
  lineHeightSelector.addEventListener("change", function(event){
    let lineHeightValue = event.target.value
    content.style.lineHeight = lineHeightValue.toString() + "px"
  })
  /* Define BackgroundColor */
  backgroundColorSelector.addEventListener("change", function(event){
    let backgroundColorValue = event.target.value;
    document.body.style.backgroundColor = backgroundColorValue
  })
  /* Define cor da fonte */
  fontColorSelector.addEventListener("change", function(event){
    let fontColorValue = event.target.value;
    content.style.color = fontColorValue
  })
  /* Font Style */
  fontFamilySelector.addEventListener("change", function(event){
    let fontFamilyValue = event.target.value
    content.style.fontFamily = fontFamilyValue
  })
  /* Inserir Texto */
  textInsertInput.addEventListener("change", function(event){
    let text = event.target.value
    content.innerHTML = text
  })
}