let words = ['find', 'learn', 'smart', 'wicked', 'top', 'sky', 'word', 'insert', 'world', 'hello'];
let word = words[ Math.floor(Math.random() * words.length)]
let und = document.getElementById('und');
let undt = und.textContent;
let lives = 6;

for (var i = word.length - 1; i >= 0; i--) {
    und.textContent += '_';
}

document.body.addEventListener('keydown', function (event) {
    let y = String.fromCharCode(event.keyCode).toLowerCase();
    let newStr;

    for(var i = 0, length1 = word.length; i < length1; i++){
        if (word.charAt(i) === y) {
            newStr = und.textContent.replace(und.textContent.charAt(i), y);
            und.textContent = newStr;
            let b = (i === word.length) ? 'It is true' : 'It is false';
            console.log(b)
        } else if (word.charAt(i) !== y && i == word.length) {
                lives -= 1;
                console.log(lives);
        }
    }
})

var down = false;

document.addEventListener('keydown', function () {
    if(down) return;
    down = true;

    // your magic code here
}, false);

document.addEventListener('keyup', function () {
    down = false;
}, false);

