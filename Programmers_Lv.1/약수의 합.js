// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 배열 쓰기
function solution(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// 배열 안쓰기
function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

// !문제 풀이 : https://school.programmers.co.kr/learn/courses/30/lessons/12928
