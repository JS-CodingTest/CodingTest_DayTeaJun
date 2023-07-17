// 문제 설명
// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ num_list의 길이 ≤ 100
// 1 ≤ num_list의 원소 ≤ 100
// 1 ≤ n ≤ 100

// 풀이 방법 1
function solution(num_list, n) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] === n) {
      return 1;
    }
  }
  return 0;
}

// 풀이 방법 2
function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}
// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별 (boolean 값)

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181840
