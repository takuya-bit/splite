/* 変数 */
// レベル選択画面
const levelArea = document.querySelector(".level");
// レベル選択ボタン
let levelBtns = document.querySelectorAll(".levelBtns div");
// ゲーム画面
const message = document.querySelector("#message");
const gameArea = document.querySelector(".game");
const squares = document.querySelectorAll("#gameBoard td");
// タイマー
let timerId;
let timerEnemy;
let timerLabel = document.querySelector("#timerLabel");
let timerCount = timerLabel.innerHTML;
// ゲーム開始終了フラグ
let isStarted = false;
// タイピングワード
let words;
let level1Words = ["apple","google","grape","lemon","water","natural","canada","america","report","winter","sound","happy","medley","peace","winter","spring","fall","summer","music","cello","server","close","touch","piano","science","college","town","mist","match","mineral","century","cola","soda","storm","consult","console","result","host","agile","power","base","code","story","destiny","html","hawaii","script","room","cloud","person","growth","hand","soccer","alarm","walk","remote","dog","cat","animal","iphone","school","local","storage","house","office"];
let level2Words = ["android","medicine","vitamin","coffee","controler","tomcat","violin","iphone","android","relax","average","clothes","flower","screen","emotion","cheese","museum","morning","chemist","enchant","option","walkman","weather","council","usually","village","current","develop","deliver","volcano","visible","general","glitter","holiday","highway","london","nintendo","screen","source","australia","africa","france","europe","computer","endless","tuner","headphone"];
let level3Words = ["youtube","student","perfect","command","classic","viola","christmas","advance","already","emperor","beautiful","smooth","channel","entrance","afternoon","exactly","computer","crystal","explore","confirm","correct","inspire","invalid","cording","programing","venture","default","","fortune","freedom","gateway","horizon","peaceful","background","festival","orchestra","blueberry","wordpress","airplane","sample","breath","copyright","markup","humidifier","refrigerator","blackhole"];
// タイピング文字列
let strTarget = document.querySelector("#strTarget");
// 現在表示されている文字列
let currentWord;
// 現在表示されている文字列の中の位置
let currentLocation;
// マス状態管理
let squareStatus = [];
let power = 0;
let powerGage = document.querySelectorAll(".powerItem");
// スコア格納
let miss = 0;
let accuracy;
let cpuScore = 0;
let playerScore = 0;
let cpuScoreLabel = document.querySelector("#cpuScore");
let playerScoreLabel = document.querySelector("#playerScore");
let accuracyLabel = document.querySelector("#accuracyLabel");
// キーボードのフラグ　（true : 押されている / false : 離されている）
let leftFlg,rightFlg,downFlg,upFlg,spaceFlg = false;
const pointer = document.querySelector("#pointer");
let pointerLocation;
let x = 306;
let y = 286;
let pv = 102;
let cpuLevel;
let cpuSpeed;
// レベル選択画面へ戻る
const resultItem = document.querySelector(".resultItem");

/* ========= レベル選択画面 ======== */

// レベル選択ボタン押下時処理
levelBtns.forEach((element)=>{
    element.addEventListener("click",(event)=>{
        openGate(event);
    });
    
});


// レベル選択ボタン押下時処理
function openGate(event){
    // レベルを変更による処理
    // 
    if(event.target === levelBtns[0]) {
        cpuLevel = 1;
        cpuSpeed = 900;
        words = level1Words;
    }else if(event.target === levelBtns[1]){
        cpuLevel = 2;
        cpuSpeed = 700;
        words = level2Words;
    }else if(event.target === levelBtns[2]) {
        cpuLevel = 3;
        cpuSpeed = 600;
        words = level3Words;
    }
    
    // レベル画面移動
    levelArea.animate(
        {
            transform: [
                'translateX(0px)','translateY(-700px)'
            ]
        },
        {
            duration:1000,
            fill: 'forwards',
            easing: 'ease'
        }
    );
    // ゲーム画面移動
    gameArea.animate(
        {
            transform: [
                'translateX(1200px)'
            ]
        },
        {
            duration:1000,
            fill: 'forwards',
            easing: 'ease'
        }
    );
}

/* ========= ゲーム画面 ======== */

// 各マスのステータス管理
for(let i = 0; i < squares.length; i++){
    squareStatus.push(0);
}

// キーボードから手を離した時の処理
document.addEventListener('keydown', function(e) {
    // ゲーム開始前
    if(!isStarted){
        if(e.keyCode === 32){
            //spaceキー押下でゲーム開始
            isStarted = true;
            // メッセージ変更
            message.innerHTML = "Activated Combat Mode";
            // 制限時間スタート
            countDownTimer();
            // タイピング文字列をセット
            setTarget();
            // CPU起動
            bootEnemy();
        }else{
            // spaceキー以外は全てはじく
            return;
        }
    }
    
    // ゲーム開始後
    if(isStarted){
        // スキル発動（ゲージランプ点灯時）
        if((e.keyCode===13)&&(power===5)){
            // 3点追加
            playerScore += 3;
            playerScoreLabel.innerHTML = playerScore;
            // MPリセット
            for(let i = 0; i < powerGage.length; i++){
                powerGage[i].style.backgroundColor = "transparent";
            }
            power=0;
        }

        // left key
        if(e.which === 37){
            leftFlg = true;
            pointerLocation = pointer.getBoundingClientRect();
            if(x > 200){
                x = x - pv;
                pointer.style.left = x + "px";
            }
        }
        // up key
        if(event.which === 38){
            upFlg = true;
            pointerLocation = pointer.getBoundingClientRect();
            if(y > 100){
                y = y - pv;
                pointer.style.top  = y + "px";
            }
        }
        // right key
        if(event.which === 39){
            rightFlg = true;
            pointerLocation = pointer.getBoundingClientRect();
            if(x<500){
                x = x + pv;
                pointer.style.left = x + "px";
            }
        }
        // down key
        if(event.which === 40){
            downFlg = true;
            pointerLocation = pointer.getBoundingClientRect();
            if(y<480){
                y = y + pv;
                pointer.style.top  = y + "px";
            }
        }
        
        // タイピング正誤判定処理
        if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
            currentLocation++;
            let placeholder ="";
            for(var i =0; i < currentLocation; i++) {
                placeholder += "_";
            }
            strTarget.innerHTML = placeholder + currentWord.substring(currentLocation);
            
            //文字を打ち終わった際の動き
            if(currentLocation === currentWord.length) {
                // 新たに文字をセット
                setTarget();
                // マスの背景色変更
                playerPaint();
            }
        }
    }
});

// カウントダウン処理
function countDownTimer(){
    timerId = setInterval(()=>{
        timerCount--;
        timerLabel.innerHTML = timerCount;
        if(timerCount <= 0){
            /* ゲーム終了時の処理 */
            clearInterval(timerId);
            isStarted =false;
            // メッセージ変更
            if(playerScore > cpuScore){
                message.innerHTML = "Conflict Resolved";
            }else{
                message.innerHTML = "Conflict Unresolved";
                message.style.color = "red";
                message.style.textShadow= "2px 2px 6px red";
            } 
        }
    },1000);
}

// ターゲット文字列設定
function setTarget(){
    currentWord = words[Math.floor(Math.random() * words.length)];
    strTarget.innerHTML = currentWord;
    currentLocation = 0;
}

// レベル選択画面へ遷移
resultItem.addEventListener("click",toSelectLevel);
function toSelectLevel(){
    location.reload();
}