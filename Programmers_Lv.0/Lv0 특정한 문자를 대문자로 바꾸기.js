// 문제 설명
// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000

// 풀이 방법 1
function solution(my_string, alp) {
  return [...my_string].map((v) => (v === alp ? v.toUpperCase() : v)).join("");
}

// 풀이 방법 2
const solution = (s, a) => s.replaceAll(a, a.toUpperCase());

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181873
