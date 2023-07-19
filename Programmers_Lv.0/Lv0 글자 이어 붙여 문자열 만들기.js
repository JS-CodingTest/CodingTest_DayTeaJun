// 문제 설명
// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string의 원소는 영소문자로 이루어져 있습니다.
// 1 ≤ index_list의 길이 ≤ 1,000
// 0 ≤ index_list의 원소 < my_string의 길이

// 풀이 방법 1
function solution(my_string, index_list) {
  const result = [];
  for (let i = 0; i < index_list.length; i++) {
    result.push(my_string[index_list[i]]);
  }
  return result.join("");
}

// 풀이 방법 2
function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181915
