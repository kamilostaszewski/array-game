let array = [];
let app = document.getElementById('app');
let board = document.createElement('div');

function createBoard(board, array) {
    board.classList.add('board');
    
    for (let i = 0; i < 100; i++) {
        array.push(i);
    }
    
    array.forEach(
        function(el, index) {
            let div = document.createElement('div');
            div.dataset.index = index;
            if (index === 65) {
                div.classList.add('player');
            }
            board.appendChild(div);
        }
    );

    return [board, array]
}

[board, array] = createBoard(board, array);

app.appendChild(board);
