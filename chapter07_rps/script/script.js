// let userInput()

let comInput;
let randmNumber = Math.random();

/**
 *  0이상 0.33미만은 가위
 * 0.33이상 0.66 미만은 바위
 * 0.66이상 1미만은 보
 */

if(randmNumber >= 0 && randmNumber < 0.33) comInput = '가위';
else if(randmNumber >= 0.33 && randmNumber < 0.66) comInput = '바위';
else if (randmNumber >= 0.66 && randmNumber < 1) comInput = "보";

console.log(comInput);

userInput = prompt('가위, 바위, 보!');

// 입력한 값이 가위, 바위, 보 둥에 하나라면 통과하는데, 잘못된 철자나 묵, 찌, 빠 등이라면 '가위, 바위, 보 중에 하나를 입력해야 합니다!'를 출력하는 alert가 나올 수 있도록 하는 조건문을 작성하시오.

if(userInput==='가위' || userInput==='바위' || userInput==='보') {
  console.log(userInput);
}else {
  alert('가위, 바위, 보 중 하나를 입력해야 합니다!');
};