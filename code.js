let textArea = document.getElementById("text");
let results = document.getElementById("results");

function analyzeMe(event) {
    console.log(event.target.value)   
}

textArea.addEventListener('keyup', analyzeMe)