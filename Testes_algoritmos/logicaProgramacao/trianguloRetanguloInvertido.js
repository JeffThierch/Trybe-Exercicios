let n = 10
let symbolOfYourChoice = "*"
let lineInput = ""
let column = n

for (let index = 0; index <= n ; index += 1){
  for(let columnIndex = 0; columnIndex < n; columnIndex += 1 ){
    if (columnIndex < column){
      lineInput += " "
    }
    else{
      lineInput = lineInput + symbolOfYourChoice
    }
  }
  console.log(lineInput)
  lineInput = ""
  column -= 1
}