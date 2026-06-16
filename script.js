let input = document.querySelector("#input")
let buttons = document.querySelector("#generatebtn")
let QRImg = document.querySelector("#imageQR")

function generateQR(){
    if(input.value === ""){
        alert("Enter your link")
        return
    }
    QRImg.setAttribute("src", `http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
}
buttons.addEventListener("click", generateQR)