// 문제 설명
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

// 풀이 방법 1
function solution(num_list) {
  const result = [...num_list];
  const first = num_list[num_list.length - 1];
  const second = num_list[num_list.length - 2];
  result.push(first > second ? first - second : first * 2);
  return result;
}

// 풀이 방법 2
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
// 배열을 reverse하여 첫번째, 두번째 값을 구조분해할당을 해주고, 스프레드기법을 이용하여 삼항연산자로 추가함

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181927
