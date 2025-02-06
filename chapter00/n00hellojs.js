console.log('Hello, JavaScript');
// 주석은 다음과 같이 가능합니다.

// 길게 작성했을 경우에도 동일하게 우리는 ctrl + /를 이용하여 주석 처리가 됩니다.

// 변수와 상수
let darkModeOn = true;
const PI = 3.14159;
// index.html 파일 생성 -> 개발자 도구를 통해서 콘솔 확인이 가능합니다.

// let a = 1;
// console.log(a)
// a = 2;  //  java에서 처음 선언 및 초기화 하는 것과 재대입 상에서의 차이를 생각
// console.log(a)
// // 변수 b를 선언해서 a에 대입하는 방식
// let b = a;
// console.log(a, b) // 결과값 : 2 2 : 콤마(,)는 출력되지 않은 점에 주목하시면 됩니다.

// // Java와의 차이점
// a = "안녕하세요"; // 2인 a에 string 자료형 대입
// b = true;         // 2인 b에 boolean 자료형 대입
// console.log(a, b) // 결과값 : 안녕하세요 true 
// 이상의 코드에서 자바스크립트 / 파이썬에서는 데이터의 종류를 구분하는 데 있어 타 언어만큼 엄격한 기준이 있지 않음.

// // 상수관련
const A = 5;
console.log(A)

// 오류발생 사례
// A = 10;
//n00hellojs.js:30 Uncaught TypeError: Assignment to constant variable.
// at n00hellojs.js:30:3 -> 라고 오류 발생함.
// let c = 10; -> 동일한 변수를 두 번 선언했기 때문
// let c = 12;
// Uncaught SyntaxError: Identifier 'c' has already been declared (at n00hellojs.js:34:5) -> 라고 오류

// let bool01 = true;
// let bool02 = false;

// console.log(bool01, bool02);  // true false
// console.log(typeof bool01); // boolean

// let z = 1;
// console.log(typeof z) // number

const bool03 = 1 < 2;
const bool04 = 1 > 2;
console.log(bool03, bool04); // true false

// 이상의 코드에서 알 수 있는 점은 조건식에 자주 사용되구요, 비교연산의 결과값을 산출할 때 많이 사용됩니다.

let bool05 = !true;
let bool06 = !bool05;
let bool07 = !!bool06;

console.log(bool05, bool06, bool07); // false true true

let num1 = 10; //정수
let num2 = 3.14;

console.log(typeof num1); //number
console.log(typeof num2); // number

// 사칙 연산
// console.log(1 + 2);
// console.log(3 - num1);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 나머지 연산자

// // ()를 통한 우선순위 지정 연산
// // const num3 = (num1 + num2) * 10;
// // console.log(num3);

// // const str01 = 'Hello';
// // const str02 = "월드";

// // console.log(typeof str01);  // string
// // console.log(typeof '1');    // string

// // let str03 = str01 + " World";
// // console.log(str03);
// // console.log(str02);

// // str03 = str03 + " *";
// // console.log(str03);

// // undefined / null

// let x;
// console.log(x); // undefined
// console.log(x, typeof x);  // 'undefined'
// // typeof가 반환하는 값은 문자열
// x = 1;
// console.log(x)  // 1

// x = null;
// console.log(x, typeof x); // null 'object'
// // null 타입은 object로 반환 -> 초기 설계 부실 문제

// // 연산자 관련 수업
// const a = 1;
// const b = 1;
// const c = "1";
// const d = 2;

// console.log(a == b, a != b);  // true / false
// console.log(a == c, a != c);  // true / false
// console.log(a == d, a != d);  // false / true

// console.log(a == c, a != c);  // false / true

// console.log(a > b, a >= b, a <= b); // false true true
// console.log(a > d, a >= d, a <= d); // fasle true true

// const str01 = "ABC";
// const str02 = "DEF";

// console.log(str01 === "ABC"); // true
// console.log(str01 > str02); // false
// 문자열의 경우에 알파벳 순서상 뒤에 오는 것을 더 크다고 판단

// 삼항연산자 관련 수업
// let bool01 = true;
// let result = bool01 ? "참" : "거짓";
// console.log(result);  // 참

// let num05 = 28;
// console.log(
//   "num05는 03의 배수" + (num05 % 3 === 0 ? "입니다" : "가 아닙니다")
// );
// num05는 03의 배수가 아닙니다

// 객체 관련 수업
const person01 = {
  name: "김철수",
  age: 25,
  address: "부산광역시 연제구",
  married: false
};

console.log(typeof person01); // object
console.log(person01);
/*
원래 :
{name: '김철수', age: 25, address: '부산광역시 연제구', married: false}

console.log로 찍고, copt object 사용했더니 key에 "" 붙어있는 걸로 보아 JSON형태
{
    "name": "김철수",
    "age": 25,
    "address": "부산광역시 연제구",
    "married": false
}
*/

// 객체 접근 방법 -> Java와 동일
// # 1 마치 인스턴스 변수처럼
console.log(person01.name);

// # 2 Java에서의 Map 자료형과 같은 방식이라는 점에서 
console.log(person01["name"]);
// 와 같은 방식으로 출력할 수 있음.

const person01Age = person01.age;
const typeOfMarried = typeof person01 ["married"];

console.log(person01Age, typeOfMarried);
// 25 'boolean'

// 객체를 통해서 지정한 value를 상수에 저장하여 (#1, #2f를 이용해서 특정 값만 산출한 후에), 걔네만 콘솔에 출력함.

// 프로퍼티를 추가하는 방식
person01.job = "programmer";
person01["booldType"] = "O";

console.log(person01);

/*
address: "부산광역시 연제구"
age: 25
booldType: "O"
job: "programmer"
married: false
name: "김철수"
*/

// 기존 프로퍼티 수정 방식
person01.age++;
person01["job"] = "teacher";

console.log(person01)

// const로 선언한 객체 자체를 바꾸려고 하면


