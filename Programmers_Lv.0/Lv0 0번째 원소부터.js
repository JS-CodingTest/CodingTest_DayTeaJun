// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 30
// 1 ≤ num_list의 원소 ≤ 9
// 1 ≤ n ≤ num_list의 길이

function solution(num_list, n) {
  return num_list.slice(n - 1);
}
// slice는 받은 인자만큼 배열의 길이를 자른 뒤 나머지 값을 반환함

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181892
