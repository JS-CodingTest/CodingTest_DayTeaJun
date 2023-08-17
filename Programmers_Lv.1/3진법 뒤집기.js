// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

function solution(n) {
  let reversed_N = n.toString(3).split("").reverse().join("");
  return parseInt(reversed_N, 3);
}
// Number.toString([radix]) : 숫자를 문자열로 변환하여 반환한다. 해당 method의 인자 값으로 radix를 전달하면 숫자를 해당 radix의 값으로 변환한 값을 문자열로 반환한다.
// String.split() : 문자열을 분할하여 요소로 전달한 배열을 반환한다. 해당 method의 인자 값을 전달하면 전달 받은 인자 값을 기준으로 문자열을 분할한다.
// Array.reverse() : 배열의 요소를 반대로 재배열 한다.
// Array.join() : 전달받은 인자 값을 기준을 요소 사이에 반영한 문자열을 반환한다.
// parseInt(string, radix) : 전달 받은 문자열을 전달 받은 radix로 분석한 정수를 반환한다. 해당 문자열이 3진법을 나타내고 있어, 3진법으로 분석한 정수를 반환

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/68935
