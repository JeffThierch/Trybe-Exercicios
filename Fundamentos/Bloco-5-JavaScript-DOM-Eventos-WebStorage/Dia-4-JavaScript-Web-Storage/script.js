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
    localStorage.setItem("fontSize", fontSizeValue)
  })
  /* Define a altura da linha */
  lineHeightSelector.addEventListener("change", function(event){
    let lineHeightValue = event.target.value
    content.style.lineHeight = lineHeightValue.toString() + "px"
    localStorage.setItem("lineHeight", lineHeightValue)
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
    if (backgroundColor) setBackgroundColor(backgroundColor)

    let textContent = localStorage.getItem("textContent")
    if (textContent) setBackgroundColor(backgroundColor)


    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) setFontColor(fontColor)

    let fontSize = localStorage.getItem("fontSize")
    if (fontSize) setFontSize(fontSize)

    let lineHeight = localStorage.getItem("lineHeight")
    if (lineHeight) setLineHeight(lineHeight)

    let fontFamily = localStorage.getItem("fontFamily")
    if (fontFamily) setFontFamily(fontFamily)
  }
  initialize()

}