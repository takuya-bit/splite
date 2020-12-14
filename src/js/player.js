// MP更新処理
function updatePower(){
    if(power >= 5){
        return;
    }
    powerGage[power].style.backgroundColor = "#21cbff";
    power++;
}

// マスを塗る
function playerPaint(){
    pointerLocation = pointer.getBoundingClientRect();
    let pointerY = Math.floor((pointerLocation.top + 20 ) /100);
    let pointerX = Math.floor((pointerLocation.left)/100);
    let squareLocation;
    if(pointerX === 1) {
        // 1列目
        squareLocation = pointerY * 5 - 5;
    }else if(pointerX === 2){
        // 2列目
        squareLocation = pointerY * 5 - 4;
    }else if(pointerX === 3){
        // 3列目
        squareLocation = pointerY * 5 - 3;
    }else if(pointerX === 4){
        // 4列目
        squareLocation = pointerY * 5 - 2;
    }else if(pointerX === 5){
        // 5列目
        squareLocation = pointerY * 5 - 1;
    }
    if(squareStatus[squareLocation] !== 1){
        // マスの状態更新
        squares[squareLocation].style.backgroundColor = '#21cbff';
        squareStatus[squareLocation] = 1;
        // PLAYERスコア更新
        playerScore++;
        playerScoreLabel.innerHTML = playerScore;
        // MP更新
        updatePower();
        // オセロ機能
        reverseForPLayer(squareLocation);
    }
}

// PLAYERのオセロ機能
function reverseForPLayer(index){
    //左
    for (let i = index - 1, end = index - index % 5, buf = []; i >= end; i--) {
        if (squareStatus[i]===0) {
            break;
        }
        if (squareStatus[i] === 1) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 1;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#21cbff";
                    // PLAYERスコア更新
                    playerScore++;
                    playerScoreLabel.innerHTML = playerScore;
                });
            }
            break;
        }
        buf.push(i);
    }
    //右
    for (let i = index + 1, end = index + (4 - index % 5), buf = []; i <= end; i++) {
        if (squareStatus[i]===0) {
            break;
        }
        if (squareStatus[i] === 1) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 1;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#21cbff";
                    // PLAYERスコア更新
                    playerScore++;
                    playerScoreLabel.innerHTML = playerScore;
                });
            }
            break;
        }
        buf.push(i);
    }
    //上
    for (let i = index - 5, buf = []; i >= 0; i -= 5) {
        if (squareStatus[i]===0) {
            break;
        }
        if (squareStatus[i] === 1) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 1;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#21cbff";
                    // PLAYERスコア更新
                    playerScore++;
                    playerScoreLabel.innerHTML = playerScore;
                });
            }
            break;
        }
        buf.push(i);
    }
    //下
    for (let i = index + 5, buf = []; i <= 24; i += 5) {
        if (squareStatus[i]===0) {
            break;
        }
        if (squareStatus[i] === 1) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 1;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#21cbff";
                    // PLAYERスコア更新
                    playerScore++;
                    playerScoreLabel.innerHTML = playerScore;
                });
            }
            break;
        }
        buf.push(i);
    }
    //左上
    for (let i = index - 6, buf = []; i >= 0; i -= 6) {
        if (squareStatus[i]===0) {
            break;
        }
        if (squareStatus[i] === 1) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 1;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#21cbff";
                    // PLAYERスコア更新
                    playerScore++;
                    playerScoreLabel.innerHTML = playerScore;
                });
            }
            break;
        }
        buf.push(i);
    }
    //左下
    for (let i = index + 4, buf = []; i <= 24; i += 4) {
        if (squareStatus[i]===0) {
            break;
        }
        if (squareStatus[i] === 1) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 1;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#21cbff";
                    // PLAYERスコア更新
                    playerScore++;
                    playerScoreLabel.innerHTML = playerScore;
                });
            }
            break;
        }
        buf.push(i);
    }
    //右上
    for (let i = index - 4, buf = []; i >= 0; i -= 4) {
        if (squareStatus[i]===0) {
            break;
        }
        if (squareStatus[i] === 1) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 1;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#21cbff";
                    // PLAYERスコア更新
                    playerScore++;
                    playerScoreLabel.innerHTML = playerScore;
                });
            }
            break;
        }
        buf.push(i);
    }
    //右下
    for (let i = index + 6, buf = []; i <= 24; i += 6) {
        if (squareStatus[i]===0) {
            break;
        }
        if (squareStatus[i] === 1) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 1;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#21cbff";
                    // PLAYERスコア更新
                    playerScore++;
                    playerScoreLabel.innerHTML = playerScore;
                });
            }
            break;
        }
        buf.push(i);
    }
}