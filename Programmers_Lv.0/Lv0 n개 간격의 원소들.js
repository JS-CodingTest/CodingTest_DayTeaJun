// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 20
// 1 ≤ num_list의 원소 ≤ 9
// 1 ≤ n ≤ 4

// 풀이 방법 1
function solution(num_list, n) {
  const result = [];
  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list[i]);
  }
  return result;
}

// 풀이 방법 2
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n));
// _(언더바)로 표시한 인자는 사용하지 않는 변수 즉, index만 사용해서, filter 메서드로 n번째 간격 원소들만 담게 만듦

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181888
