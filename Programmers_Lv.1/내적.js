// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

// 풀이 방법 1
function solution(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (i === j) {
        result.push(a[i] * b[j]);
      }
    }
  }
  return result.reduce((a, c) => a + c, 0);
}

// 풀이 방법 2
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
// 출제자의 의도를 제대로 파악한게 아닌가싶을 정도로 잘 푼 문제다.

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/70128
