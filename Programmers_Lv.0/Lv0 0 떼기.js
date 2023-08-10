// 문제 설명
// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ n_str ≤ 10
// n_str이 "0"으로만 이루어진 경우는 없습니다.

// 풀이 방법 1
function solution(n_str) {
  return Number(n_str) + "";
}

// 풀이 방법 2
function solution(n_str) {
  return n_str.replace(/^0+/, "");
}
// /^0+/: 이 부분은 정규 표현식
// ^: 문자열의 시작을 나타내는 메타 문자
// 0+: 0이 한 번 이상 반복되는 패턴을 나타냄
// 이 정규 표현식 /^0+/은 문자열의 시작부터 연속된 0들을 찾음

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181847
