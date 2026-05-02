const passwordlength = document.getElementById("passwordlen")
const submit = document.getElementsByClassName("submit")[0]
const includelower = document.getElementById("lower")
const includeupper = document.getElementById("Upper")

const includenumber = document.getElementById("number")

const includesymbol = document.getElementById("symbol")

submit.addEventListener("click", () => {
console.log(passwordlength.value)
console.log(includelower.checked)
console.log(includeupper.checked)
console.log(includenumber.checked)
console.log(includesymbol.checked)
})