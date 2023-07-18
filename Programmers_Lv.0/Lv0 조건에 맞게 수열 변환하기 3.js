// 문제 설명
// 정수 배열 arr와 자연수 k가 주어집니다.

// 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.

// 이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 1,000,000
// 1 ≤ arr의 원소의 값 ≤ 100
// 1 ≤ k ≤ 100

function solution(arr, k) {
  return k % 2 === 1 ? arr.map((el) => el * k) : arr.map((el) => el + k);
  // return arr.map((el) => k % 2 ? el * k : el + k);
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181835
