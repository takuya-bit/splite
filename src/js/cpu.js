// CPU起動
function bootEnemy(){
    //700ミリ秒間にランダムで色をぬる
    timerEnemy = setInterval(()=>{
        if(timerCount === 0){
            clearInterval(timerEnemy);
        }
        // 色ぬり
        let rndNumber = Math.floor( Math.random() * squares.length);
        squares[rndNumber].style.backgroundColor = '#CC0033';
        if(squareStatus[rndNumber] !== 2){
            // CPUの色でない場合
            // 背景色変更
            squares[rndNumber].style.backgroundColor = '#CC0033';
            // マスのステータス変更
            squareStatus[rndNumber] = 2;
            // CPUスコアカウント
            cpuScore++;
            cpuScoreLabel.innerHTML = cpuScore;
            // オセロ機能
            reverseForEnemy(rndNumber);
        }
    },cpuSpeed);
}

// CPUのオセロ機能
function reverseForEnemy(index){
    //左
    for (let i = index - 1, end = index - index % 5, buf = []; i >= end; i--) {
        if (squareStatus[i]===0) {
            break;
        }
        if (squareStatus[i] === 2) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 2;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#CC0033";
                    // CPUスコア更新
                    cpuScore++;
                    cpuScoreLabel.innerHTML = cpuScore;
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
        if (squareStatus[i] === 2) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 2;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#CC0033";
                    // CPUスコア更新
                    cpuScore++;
                    cpuScoreLabel.innerHTML = cpuScore;
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
        if (squareStatus[i] === 2) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 2;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#CC0033";
                    // CPUスコア更新
                    cpuScore++;
                    cpuScoreLabel.innerHTML = cpuScore;
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
        if (squareStatus[i] === 2) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 2;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#CC0033";
                    // CPUスコア更新
                    cpuScore++;
                    cpuScoreLabel.innerHTML = cpuScore;
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
        if (squareStatus[i] === 2) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 2;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#CC0033";
                    // CPUスコア更新
                    cpuScore++;
                    cpuScoreLabel.innerHTML = cpuScore;
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
        if (squareStatus[i] === 2) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 2;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#CC0033";
                    // CPUスコア更新
                    cpuScore++;
                    cpuScoreLabel.innerHTML = cpuScore;
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
        if (squareStatus[i] === 2) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 2;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#CC0033";
                    // CPUスコア更新
                    cpuScore++;
                    cpuScoreLabel.innerHTML = cpuScore;
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
        if (squareStatus[i] === 2) {
            if(buf !== null){
                buf.forEach(b => {
                    // ステータス更新
                    squareStatus[b] = 2;
                    // マスの背景色変更
                    squares[b].style.backgroundColor ="#CC0033";
                    // CPUスコア更新
                    cpuScore++;
                    cpuScoreLabel.innerHTML = cpuScore;
                });
            }
            break;
        }
        buf.push(i);
    }
}