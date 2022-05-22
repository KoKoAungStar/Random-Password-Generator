let all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","+", "-", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let pass1 = document.getElementById('pass1')
let pass2 = document.getElementById('pass2')
let pass3 = document.getElementById('pass3')
let pass4 = document.getElementById('pass4')

function generatePassword(){
    let pass = ''
    for(let i=0; i<8; i++){
        let rand = Math.floor(Math.random()* all.length)
        pass += all[rand]
    }
    return pass
}


function generatePass(){
    console.log(generatePassword())
    pass1.innerHTML = generatePassword()
    pass2.innerHTML = generatePassword()
    pass3.innerHTML = generatePassword()
    pass4.innerHTML = generatePassword()

}

const copyme = function(){
    copyToClipboard(this.innerHTML)
}
  document.getElementById('pass1').onclick = copyme;
  document.getElementById('pass2').onclick = copyme;
  document.getElementById('pass3').onclick = copyme;
  document.getElementById('pass4').onclick = copyme;


function copyToClipboard(text) {
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
}

