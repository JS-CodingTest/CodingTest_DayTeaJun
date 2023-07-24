// 문제 설명
// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ n ≤ 100

function solution(n) {
  let sum = 0;
  if (n % 2 === 1) {
    for (let i = n; i >= 1; i -= 2) {
      sum += i;
    }
  } else {
    for (let i = n; i >= 1; i -= 2) {
      sum += Math.pow(i, 2);
    }
  }
  return sum;
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181935
