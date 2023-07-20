// 문제 설명
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// 1 ≤ is_suffix의 길이 ≤ 100
// my_string과 is_suffix는 영소문자로만 이루어져 있습니다.

// 풀이 방법 1
function solution(my_string, is_suffix) {
  return my_string[my_string.length - 1] === is_suffix[is_suffix.length - 1] &&
    my_string.includes(is_suffix)
    ? 1
    : 0;
}

// 풀이 방법 2
const solution = (str, suff) => (str.endsWith(suff) ? 1 : 0);
// 어떤 문자열에서 특정 문자열로 끝나는지 확인

// 풀이 방법 3
function solution(my_string, is_suffix) {
  return my_string.slice(my_string.length - is_suffix.length) === is_suffix
    ? 1
    : 0;
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181908
