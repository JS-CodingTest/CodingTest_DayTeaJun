// 문제 설명
// 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
// 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str1, str2의 길이 ≤ 10

const readline = require("readline");
// readline 모듈 불러오기
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 인터페이스 생성하기

let input = [];

rl.on("line", function (line) {
  // 입력 받는 값을 처리하는 코드
  input = line.split(" ");
}).on("close", function () {
  // 입력이 끝나고 실행할 코드
  console.log(input.join(""));
});
// 입출력 처리하는 코드 작성하기

// Node.js readline모듈은 Readable Stream에서 한 번에 한 줄 씩 데이터를 읽기 위한 인터페이스를 제공하는 모듈이다.
// https://velog.io/@leenzy/readline-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181946
