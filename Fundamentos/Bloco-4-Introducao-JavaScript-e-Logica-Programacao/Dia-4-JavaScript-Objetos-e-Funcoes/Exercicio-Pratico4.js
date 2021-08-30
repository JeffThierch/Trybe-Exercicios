let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente : 'Sim'
};

info.recorrente = "sim"

let info2 = {
  personagem: "Tio Patinhas",
  origem: " Christmas on Bear Mountain, Dell's Four Color Comics #178 ",
  nota: "O último MacPatinhas",
  recorrente : "Sim"
}

console.log(info.personagem, " e ", info2.personagem)
console.log(info2.personagem, " e Christmas on Bear Mountain, Dell's Four Color Comics #178")
console.log(info.nota, " e ", info2.nota)
console.log("Ambos recorrentes")