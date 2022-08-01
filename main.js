// Word/Character Count
function getWordCharacterCount(){
    var text = document.getElementById('textBox').value
    var wordCount = text.split(' ').length
    var characterCount = text.length
    if(characterCount == 0) {
        wordCount = 0
    }
    wordCount = 'Word count: ' + wordCount
    characterCount = 'Character count: ' + characterCount
    document.getElementById('wordCount').innerHTML=wordCount
    document.getElementById('characterCount').innerHTML=characterCount
}

// Upper Case
function upperCase(){
    var text = document.getElementById('textBox').value
    var upperCase = text.toUpperCase()
    document.getElementById('textBox').value=upperCase
}

// Lower Case
function lowerCase(){
    var text = document.getElementById('textBox').value
    var lowerCase = text.toLowerCase()
    document.getElementById('textBox').value=lowerCase
}

// Alternating Case
function alternatingCase(){
    var text = document.getElementById('textBox').value
    var alternatingCase = text.split('').map((c,i) => 
    i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('')
    console.log(alternatingCase)
    document.getElementById('textBox').value=alternatingCase
}

// Capitalized Case
function capitalizedCase(){
    var text = document.getElementById('textBox').value
    var capitalizedCase = text.toLowerCase().split(" ")
    for(var i = 0; i< capitalizedCase.length; i++){
        capitalizedCase[i] = capitalizedCase[i][0].toUpperCase() + capitalizedCase[i].slice(1)
    }
    capitalizedCase = capitalizedCase.join(" ")
    document.getElementById('textBox').value=capitalizedCase
}

// Invert Case
function invertCase(){
    var text = document.getElementById('textBox').value

    var invertCase = ''
    var index = 0
    while (index < text.length) {
        var lowerUpper = text.charAt(index)
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

function clearText(){
    document.getElementById('textBox').value=''
}

// Copy
function copy(){
    var text = document.getElementById("textBox").value
    navigator.clipboard.writeText(text)
}