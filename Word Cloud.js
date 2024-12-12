let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let addBtnEl = document.getElementById("addBtn");
let randomFontFamily = ["Times New Roman", "sans-serif", "serif", "cursive", "fantasy", "arial", "Roboto"];
let randomFontFamilyLen = randomFontFamily.length;

let errorWord = "Please enter a word";




function createAndAddWordTOWordCloud(eachWord) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let randomFamily = Math.ceil[(Math.random() * randomFontFamilyLen) - 1];
    let word = document.createElement("span");
    word.textContent = eachWord;
    word.style.fontSize = randomFontSize;
    word.style.fontFamily = randomFamily;
    word.classList.add("m-3");
    wordsContainerEl.appendChild(word);

}

for (let eachWord of wordCloud) {
    createAndAddWordTOWordCloud(eachWord);
}

addBtnEl.onclick = function() {
    let userInputVal = userInputEl.value;
    if (userInputVal === "") {
        errorMsgEl.textContent = errorWord;
    } else {
        userInputEl.value = "";
        errorMsgEl.value = "";
        createAndAddWordTOWordCloud(userInputVal);
    }
}