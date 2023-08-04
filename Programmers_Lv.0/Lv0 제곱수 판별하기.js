// 문제 설명
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 1,000,000

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
// Math.sqrt 주어진 숫자에 루트를 씌어 제곱근 반환
// % 1 하지 않고 isInteger() 를 써도 된다 (정수인지 판별해줌)

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120909
