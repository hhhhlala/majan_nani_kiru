const handDiv = document.getElementById('hand');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const explanationText = document.getElementById('explanation-text');
const nextQuestionButton = document.getElementById('next-question');

let currentProblem = {};

function getTileImageUrl(tile) {
    let filename = '';
    // 修正: typeは種類、numは数字
    const type = tile.slice(1); // 例: 'm', 'p', 's', 'z'
    const num = tile.slice(0, 1); // 例: '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'

    if (type === 'm') {
        filename = `Man${num}`;
    } else if (type === 'p') {
        if (num === '0') { // 赤5筒
            filename = `Pin5-Dora`;
        } else {
            filename = `Pin${num}`;
        }
    } else if (type === 's') {
        filename = `Sou${num}`;
    } else if (type === 'z') { // 字牌
        const honorMap = {
            '1': 'Ton', // 東
            '2': 'Nan', // 南
            '3': 'Shaa', // 西
            '4': 'Pei', // 北
            '5': 'Haku', // 白
            '6': 'Hatsu', // 發
            '7': 'Chun' // 中
        };
        filename = honorMap[num];
    } else {
        console.warn(`Unknown tile type: ${tile}`);
        filename = tile; // Fallback
    }

    return `https://raw.githack.com/FluffyStuff/riichi-mahjong-tiles/master/Export/Regular/${filename}.png`;
}

function displayProblem(problem) {
    currentProblem = problem;
    questionText.textContent = problem.question;
    answerText.textContent = '';
    explanationText.textContent = '';
    handDiv.innerHTML = '';

    const hand = problem.handString.split(' ');

    hand.forEach(tile => {
        const tileImg = document.createElement('img');
        tileImg.src = getTileImageUrl(tile);
        tileImg.classList.add('tile');
        tileImg.dataset.tile = tile;
        tileImg.addEventListener('click', handleTileClick);
        tileImg.onerror = () => {
            console.error(`画像の読み込みに失敗しました: ${tileImg.src}`);
            tileImg.alt = tile;
        };
        handDiv.appendChild(tileImg);
    });
}

function handleTileClick(event) {
    const clickedTile = event.target.dataset.tile;

    if (clickedTile === currentProblem.correctAnswer) {
        answerText.textContent = '正解！';
    } else {
        answerText.textContent = `不正解。正解は ${currentProblem.correctAnswer} です。`;
    }
    explanationText.textContent = currentProblem.explanation;

    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.removeEventListener('click', handleTileClick);
        tile.style.cursor = 'default';
    });
}

function showRandomProblem() {
    const randomIndex = Math.floor(Math.random() * problems.length);
    displayProblem(problems[randomIndex]);
}

nextQuestionButton.addEventListener('click', showRandomProblem);

showRandomProblem();