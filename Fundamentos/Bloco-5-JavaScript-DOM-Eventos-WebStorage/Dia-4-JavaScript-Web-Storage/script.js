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
    let fontSize = content.style.fontSize = fontSizeValue.toString() + "px"
    localStorage.setItem("fontSize", fontSize)
  })
  /* Define a altura da linha */
  lineHeightSelector.addEventListener("change", function(event){
    let lineHeightValue = event.target.value
    let lineHeight = content.style.lineHeight = lineHeightValue.toString() + "px"
    localStorage.setItem("lineHeight", lineHeight)
  })
  /* Define BackgroundColor */
  backgroundColorSelector.addEventListener("change", function(event){
    let backgroundColorValue = event.target.value;
    document.body.style.backgroundColor = backgroundColorValue
    localStorage.setItem("backgroundColor", backgroundColorValue)
  })
  /* Define cor da fonte */
  fontColorSelector.addEventListener("change", function(event){
    let fontColorValue = event.target.value;
    content.style.color = fontColorValue
    localStorage.setItem("fontColor", fontColorValue)
  })
  /* Font Family */
  fontFamilySelector.addEventListener("change", function(event){
    let fontFamilyValue = event.target.value
    content.style.fontFamily = fontFamilyValue
    localStorage.setItem("fontFamily", fontFamilyValue)
  })
  /* Inserir Texto */
  textInsertInput.addEventListener("change", function(event){
    let text = event.target.value
    let textContentUser = text
    content.innerHTML = textContentUser
    localStorage.setItem("textContent", text)
  })

  function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    backgroundColorSelector.value = backgroundColor
    document.body.style.backgroundColor = backgroundColor
    

    let textContent = localStorage.getItem("textContent")
   content.innerHTML = textContent


    let fontColor = localStorage.getItem("fontColor")
    fontColorSelector.value = fontColor
    content.style.color = fontColor

    let fontSize = localStorage.getItem("fontSize")
    fontSizeSelector.value = fontSize
    content.style.fontSize = fontSize

    let lineHeight = localStorage.getItem("lineHeight")
    lineHeightSelector.value = lineHeight
    content.style.lineHeight = lineHeight

    let fontFamily = localStorage.getItem("fontFamily")
    fontFamilySelector.value = fontFamily
    content.style.fontFamily = fontFamily
    
    
  }
  initialize()

}