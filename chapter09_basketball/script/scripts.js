// 점수 총합을 대입할 변수 선언
let comScore = 0;
let userScore = 0;
// 컴퓨터 턴이면 내턴이 아님, 내턴이면 컴퓨터 턴이 아님 : 그 결과 boolean을 택할겁니다
let isComputerTurn = true; 
let shootLeft = 15;

function onComputerShoot() {

  if(!isComputerTurn) return;

  // 삼항연산자 - Math.random()을 응용
  let shootType = Math.random() < 0.5 ? 2 : 3;

  let comScoreElement = document.getElementById('computer-score');
  let textElement = document.getElementById('text');

  
  if (shootType === 2) {
    if(Math.random() < 0.5) {
      // 2점슛을 1/2 확률로 성공
      textElement.innerHTML = '컴퓨터가 2점슛을 성공했습니다ㅜㅜ now - user';
      comScore += 2;

      comScoreElement.innerHTML = comScore;

    } else {
      // 실패했을 때
      textElement.innerHTML = '컴퓨터가 2점슛을 실패했습니다!! now - user';
    }
  } else {
    if(Math.random() < 0.33) {
      // 3점슛 1/3확률로 성공
      textElement.innerHTML = '컴퓨터가 3점슛을 성공했습니다ㅜㅜ now - user'
      comScore += 3;

      comScoreElement.innerHTML = comScore;
    }else {
      // 실패했을 때
      textElement.innerHTML = '컴퓨터가 3점슛을 실패했습니다!! now - user'
    }
  } 

  isComputerTurn = false;

  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = true;
  }

  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = false;
  }
}



function onUserShoot(shootType) {
  if(isComputerTurn) return;

  let textElement = document.getElementById('text');  // onComputerShoot()에서도 지역변수로 선언, 여기서도 동일

  let userScoreElement = document.getElementById('user-score');

  if (shootType === 2) {
    if(Math.random() < 0.5) {
      // 2점슛을 1/2 확률로 성공
      textElement.innerHTML = '2점슛을 성공했습니다 now - computer';
      userScore += 2;

      userScoreElement.innerHTML = userScore;

    } else {
      // 실패했을 때
      textElement.innerHTML = '2점슛을 실패했습니다 now - computer';
    }
  } else {
    if(Math.random() < 0.33) {
      // 3점슛 1/3확률로 성공
      textElement.innerHTML = '3점슛을 성공했습니다 now - computer'
      userScore += 3;

      userScoreElement.innerHTML = userScore;
    }else {
      // 실패했을 때
      textElement.innerHTML = '3점슛을 실패했습니다 now - computer'
    }
  } 

  isComputerTurn = true;

  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = false;
  }

  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = true;
  }

  // OnUserShoot()을 호출했을 때에만 shootLeft가 --; 되어야 함.
  shootLeft --;

  // 이거는 그냥 JS 상에서 --를 먹을 뿐이지 HTML에서 가시적으로 바뀌지 않습니다

  let shootLeftElement = document.getElementById('shots-left');
  shootLeftElement.innerHTML = shootLeft;
}