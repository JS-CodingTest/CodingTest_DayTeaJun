// 문제 설명
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ str1의 길이 ≤ 100
// 1 ≤ str2의 길이 ≤ 100
// 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.

// 풀이 방법 1
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}
// 문자열 안에 문자가 있는지에 대한 boolean 을 반환하는 메서드

// 풀이 방법 2
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
// 문자열에 split로 str2이 있으면 2개로 나눠지고 없으면 1개로 나눠지게 함

// 풀이 방법 3
function solution(str1, str2) {
  return str1.indexOf(str2) === -1 ? 2 : 1;
}
// 문자열 안에 문자가 없으면 -1을 반환하는 메서드

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120908
