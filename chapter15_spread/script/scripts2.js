let students = [];

// 새로운 학생을 추가하는 함수
function addStudent(name, age, gender, grade) {
  const newStudent = {
    id: students.length + 1,
    name,
    age,
    gender,
    grade,
  };

  // 원본 객체가 아닌 복사본을 배열에 추가
  students = [...students, {...newStudent}];
  console.log(`학생 추가 완료 : ${name}`);
}

// 학생 성적 업데이트
function updateGrade(studentId, newGrade) {
  students = students.map(student => 
    student.id === studentId
    ? {...student, grade: newGrade} // 아이디가 일치한다면 해당 학생만 복사본으로 수정
    : student // studentId가 일치하지 않으면 수정하지 않고 그대로 두기
  );
  console.log(`ID : ${studentId} 학생 성적 업데이트 완료`);
}

// 전체 학생 목록 출력 
function printStudents() {
  console.log("학생목록 : ");
  // forEach 사용
  students.forEach(student => console.log(JSON.stringify(student)));
  // students.forEach(student => console.log(student))
  // 이렇게 하면 [object Object]라고 뜸 => 해결책은 JSON.stringify()

  // 반복문 사용
  // for(let i = 0; i < students.length; i++) {
  //   console.log(students[i]);
  // } // 이 코드와 동일
}

// 여기에 성적우수 학생 걸러내는 필터링 적용 함수 정의 예정
function getTopStudents() {
  const topStudents = students.filter(student => student.grade >= 80);
  // students는 배열, student는 students 배열 안에 있는 요소를 가리키는 매개변수  
  console.log("우수 학생 명단");
  // forEach 사용
  topStudents.forEach(topStudent => console.log(JSON.stringify(topStudent))); 

  topStudents.forEach(topStudent => {
    console.log(`이름 : ${topStudent.name}`);
    console.log(`성적 : ${topStudent.grade}점`);
  })

  // 반복문 사용
  // for(let i = 0; i < topStudents.length; i++) {
  //   console.log(topStudents[i]);
  // }
}

// 이상의 getTopStudents()함수의 경우 출력결과가 id부터 성별 및 성적까지 전부 출력되기 때문에 가독성이 좀 떨어져 보이고, 이미 printStudents()을 통해서 객체를 출력하는 .forEach()를 사용해봤기 때문에
// 실행 예
// 이름 : 김일
// 성적 : 85점
// 으로 출력하려면 어떻게 해야할지 고민해보겠습니다
// 백틱을 사용해야 합니다
// 일반 반복문으로 해도 좋습니다



// 객체 생성
addStudent("김일", 20, "남", 85);
addStudent("김이", 21, "여", 78);
addStudent("김삼", 22, "여", 100);
addStudent("김사", 23, "남", 30);

// 전체 학생 출력 1. 배열을 통해서 2. 각 요소를 하나하나 풀어서 출력
console.log(students);
printStudents();

// 성적 우수 학생 필터링 함수 호출
getTopStudents();

// 성적 수정
updateGrade(2, 95);  // 수정되기 전이 출력됨


// 성적 수정 후 1. 배열을 통해서 2. 각 요소를 하나하나 풀어서 출력
console.log(students);  // 수정됨
printStudents();  // 수정됨

// 성적 우수 학생 필터링 함수 호출
getTopStudents();
