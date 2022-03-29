let n = 15;
let symbolOfYourChoice = "*";


let columnCenter = (n + 1) / 2;
let controlLeft = columnCenter;
let controlRight = columnCenter;


for (let index = 1; index <= columnCenter; index += 1){
  let lineInput = "";
  for(let columnIndex = 1; columnIndex <= n; columnIndex += 1){
    if (columnIndex == controlLeft ||columnIndex == controlRight || index == columnCenter){
      lineInput += symbolOfYourChoice
    }
    else{
      lineInput += " "
    }
  }
  
  controlRight += 1
  controlLeft -= 1
  console.log(lineInput)
  
}