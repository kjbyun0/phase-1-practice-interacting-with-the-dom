
const h1Counter = document.getElementById('counter');
function updateCounter() {
    const cntrNum = parseInt(h1Counter.textContent, 10) + 1;
    h1Counter.textContent = cntrNum.toString();
}
let cntrIntval = setInterval(updateCounter, 1000);

const btnMinus = document.getElementById('minus');
const btnPlus = document.getElementById('plus');
const btnHeart = document.getElementById('heart');
const btnPause = document.getElementById('pause');
const formComment = document.getElementById('comment-form');

btnMinus.addEventListener('click', function () {
    const cntrNum = parseInt(h1Counter.textContent, 10) - 1;
    h1Counter.textContent = cntrNum.toString();
});


btnPlus.addEventListener('click', function () {
    const cntrNum = parseInt(h1Counter.textContent, 10) + 1;
    h1Counter.textContent = cntrNum.toString();
});

const likesObj = {};
btnHeart.addEventListener('click', function () {
    const like = h1Counter.textContent;
    if (likesObj[like] === undefined) {
        likesObj[like] = 1;
    } else {
        likesObj[like] += 1;
    }

    const ulLikes = document.querySelector('ul.likes');
    const liLikes = ulLikes.getElementsByTagName('li');
    const arrLiLikes = Array.from(liLikes);
    arrLiLikes.forEach(elem => elem.remove());

    for (const key in likesObj) {
        const liLike = document.createElement('li');
        if (likesObj[key] === 1) {
           liLike.textContent = `${key} has been liked 1 time`;
        } else {
            liLike.textContent = `${key} has been liked ${likesObj[key]} times`;
        }
        ulLikes.appendChild(liLike);
    }
});

btnPause.addEventListener('click', function () {
    let btnText = btnPause.textContent;
    if (btnText === ' pause ') {
        clearInterval(cntrIntval);
        btnMinus.disabled = true;
        btnPlus.disabled = true;
        btnHeart.disabled = true;
        formComment.children[2].disabled = true;
        btnPause.textContent = ' resume ';
    } else {
        cntrIntval = setInterval(updateCounter, 1000);
        btnMinus.disabled = false;
        btnPlus.disabled = false;
        btnHeart.disabled = false;
        formComment.children[2].disabled = false;
        btnPause.textContent = ' pause ';
    }
});

const divComments = document.getElementById('list');
formComment.addEventListener('submit', function (e) {
    e.preventDefault();
    const pComment = document.createElement('p');
    pComment.textContent = e.target.children[0].value;
    divComments.appendChild(pComment);
    e.target.reset();
});

const pInitComment = document.createElement('p');
pInitComment.textContent = 'Wow, what a fun game this is.';
divComments.appendChild(pInitComment);