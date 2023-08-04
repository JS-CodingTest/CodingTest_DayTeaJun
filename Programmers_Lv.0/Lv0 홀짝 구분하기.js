// 문제 설명
// 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ n ≤ 1,000

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line % 2 === 0 ? `${line} is even` : `${line} is odd`;
}).on("close", function () {
  console.log(input);
});

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181944
