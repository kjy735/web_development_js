let computer = {
  score : 0,
  percent2: 0.5,
  percent3: 0.33
};

let user = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};

let game = {
  isComputerTurn: true,
  shootleft: 15
};


function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
};

function updateComScore(score) {
  let comScoreElement = document.getElementById('computer-score');
  computer.score += score;
  comScoreElement.innerHTML = computer.score;
};

function updateUserScore(score) {
  let userScoreElement = document.getElementById('user-score');
  user.score += score;
  userScoreElement.innerHTML = user.score;
};

function disableComButton(flag) {
  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = flag;
  };
};

function disableUserButtom(flag) {
  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = flag;
  };
};

function updateAI() {
  let difference = user.score - computer.score;

  if(difference > 11) {
    computer.percent2 = 0.7;
    computer.percent3 = 0.43;
  } else if(difference > 7) {
    computer.percent2 = 0.6;
    computer.percent3 = 0.38;
  } else if(difference < -11) {
    computer.percent2 = 0.3;
    computer.percent3 = 0.28;
  } else if(difference < -7) {
    computer.percent2 = 0.4;
    computer.percent3 = 0.28;
  };
};

//---------------------------------------------------------------------------computer

function onComputerShoot() {

  if(!game.isComputerTurn) return;

  updateAI(); 
  let shootType = Math.random() < 0.5 ? 2 : 3;

  if(Math.random() < computer['percent' + shootType]) { 
    showText('컴퓨터가 ' + shootType + '점 슛을 성공시켰씁니다');
    updateComScore(2);
  } else {
    showText('컴퓨터가 ' + shootType + '점 슛을 실패했습니다');
  };
  
  
  game.isComputerTurn = false;
  disableComButton(true);
  disableUserButtom(false);
};

//------------------------------------------------------------------------------ user

function onUserShoot(shootType) {

  if(game.isComputerTurn) return;

  if (shootType === 2) {
    if(Math.random() < user.percent2) {
      showText('2점슛을 성공했습니다 now - computer');
      updateUserScore(2);

    } else {
      showText('2점슛을 실패했습니다 now - computer');
    }
  } else {
    if(Math.random() < user.percent3) {
      showText('3점슛을 성공했습니다 now - computer');
      updateUserScore(3);

    }else {
      showText('3점슛을 실패했습니다 now - computer');
    };
  };

  game.isComputerTurn = true;
  disableComButton(false);
  disableUserButtom(true);

  game.shootLeft --;


  let shootLeftElement = document.getElementById('shots-left');
  shootLeftElement.innerHTML = game.shootLeft;

  if(game.shootLeft === 0) {
    if(user.score > computer.score) {
      showText('이겼습니다');
      alert('이겼습니다 - 게임이 종료되었습니다.');
    } else if(user.score < computer.score) {
      showText('졌습니다');
      alert('졌습니다 - 게임이 종료되었습니다.');
    } else {
      showText('비겼습니다');
      alert('비겼습니다 - 게임이 종료되었습니다.');
    };
  };
};