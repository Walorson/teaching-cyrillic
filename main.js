const letter = document.getElementById("letter");
const progress = document.getElementById("progress");
const alphabet = ["А","Б","Ц","Д","Э","Е","Ф","Г","Ч","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","В","Ы","З","Х","Ж","Я","Ш","Щ","Ъ","Ь","Ё","Ч","Ю"];
let randPool = [...alphabet];

window.addEventListener("keypress", (e) => {
    if(e.key == "Enter")
    {
        randomLetter();
    }
});

window.addEventListener("click", () => {
    randomLetter();
});

function randomLetter()
{
    const rand = Math.floor(Math.random()*randPool.length);
    letter.textContent = randPool[rand];

    delete randPool[rand];
    randPool = randPool.filter(item => item != undefined);

    if(randPool.length <= 0)
    {
        randPool = [...alphabet];
    }

    updateProgress();
}

function updateProgress()
{
    progress.innerHTML = (alphabet.length - randPool.length + 1) + "/" + alphabet.length;
}