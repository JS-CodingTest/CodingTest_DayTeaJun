// 문제 설명
// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num ≤ 100
// 2 ≤ n ≤ 9

function solution(num, n) {
  return num % n === 0 ? 1 : 0;
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181937
