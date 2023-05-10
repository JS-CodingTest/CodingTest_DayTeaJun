// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.
function solution(x, n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }

  return arr;
}

// 베스트 풀이
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
// 해석 : Array.prototype.fill() 함수로 n개만큼 배열을 만들고 x값으로 채운 뒤, map으로 각 값의 ((인덱스값 + 1) * 배열요소의 값) 으로 연산하여 반환

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12954
