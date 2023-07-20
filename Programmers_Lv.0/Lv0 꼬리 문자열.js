// 꼬리 문자열
// 문제 설명
// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다. 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다. 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.

// 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.

// 풀이 방법 1
function solution(str_list, ex) {
  return str_list.map((el) => (el.includes(ex) ? null : el)).join("");
}

// 풀이 방법 2
function solution(str_list, ex) {
  return str_list.reduce((acc, cur) => {
    if (cur.includes(ex)) return acc;
    return acc + cur;
  }, "");
}
// reduce 메서드를 이용해 includes로 통과된 문자열을 계속 합산하여 결과를 만듦

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181841
