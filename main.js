const passwordlength = document.getElementById("passwordlen")
const submit = document.getElementsByClassName("submit")[0]
const includelower = document.getElementById("lower")
const includeupper = document.getElementById("Upper")
const output = document.getElementById("ps");
const includenumber = document.getElementById("number")

const includesymbol = document.getElementById("symbol")
const copy = document.getElementById("cp") ;

submit.addEventListener("click", () => {

function genratepass(passwordlength,includelower,includeupper,includenumber,includesymbol){
    const lowercase ="abcdefghijklmnopqrstuvwxyz";
    const Uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers ="1234567890"
    const symbol ="!@#$%^&*()_+=-,./<>?"

    let allowed = "";
    let password = "" ;

    allowed += includelower.checked ? lowercase : "" ;
    allowed += includeupper.checked ? Uppercase : "" ;
    allowed += includenumber.checked ? numbers : "" ;
    allowed += includesymbol.checked ? symbol : "" ;
    
    for(let i = 0 ; i < passwordlength.value ; i++){
        const random = Math.floor(Math.random()*allowed.length) ;
        password += allowed[random]
    }


return password
}
const pass = genratepass(passwordlength,includelower,includeupper,includenumber,includesymbol) ;
console.log(passwordlength.value)
console.log(includelower.checked)
console.log(includeupper.checked)
console.log(includenumber.checked)
console.log(includesymbol.checked)
output.innerText = pass
})
const originalText = copy.innerHTML;

copy.addEventListener("click", () => {
    const text = output.innerText;

    if (!text || text.includes("Select")) return;

    navigator.clipboard.writeText(text);

    copy.innerHTML = "✔"; 

    setTimeout(() => {
        copy.innerHTML = originalText; 
    }, 1000);
});
