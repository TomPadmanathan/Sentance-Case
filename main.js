// Get Word And Character Count Function
function getWordCharacterCount(){
    let text = document.getElementById('textBox').value
    let wordCount = text.split(' ').length
    let characterCount = text.length
    if(characterCount === 0) {
        wordCount = 0
    }
    document.getElementById('wordCount').innerHTML='Word count: ' + wordCount
    document.getElementById('characterCount').innerHTML='Character count: ' + characterCount
}

// Upper Case Function
function upperCase(){
    document.getElementById('textBox').value=document.getElementById('textBox').value.toUpperCase()
}

// Lower Case Function
function lowerCase(){
    document.getElementById('textBox').value=document.getElementById('textBox').value.toLowerCase()
}

// Alternating Case Function
function alternatingCase(){
    document.getElementById('textBox').value=document.getElementById('textBox').value.split('').map((c,i) => 
    i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('')
}

// Capitalized Case Function
function capitalizedCase(){
    let text = document.getElementById('textBox').value.toLowerCase().split(" ")
    for(let i = 0; i< text.length; i++){
        text[i] = text[i][0].toUpperCase() + text[i].slice(1)
    }
    document.getElementById('textBox').value=text.join(" ")
}

// Invert Case Function
function invertCase(){
    let text = document.getElementById('textBox').value
    let invertCase = ''
    let index = 0
    while (index < text.length) {
        let lowerUpper = text.charAt(index)
        if (lowerUpper == lowerUpper.toUpperCase()) {
            lowerUpper = lowerUpper.toLowerCase()
        } else {
            lowerUpper = lowerUpper.toUpperCase()
        }
        index += 1;
        invertCase += lowerUpper; 
    }
    document.getElementById('textBox').value=invertCase
}

// Clear Text Function
function clearText(){
    document.getElementById('textBox').value=''
}

// Copy Text Function
function copy(){
    navigator.clipboard.writeText(document.getElementById("textBox").value)
}
