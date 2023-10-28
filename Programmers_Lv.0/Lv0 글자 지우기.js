// 문제 설명
// 문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ indices의 길이 < my_string의 길이 ≤ 100
// my_string은 영소문자로만 이루어져 있습니다
// 0 ≤ indices의 원소 < my_string의 길이
// indices의 원소는 모두 서로 다릅니다.

function solution(my_string, indices) {
  return [...my_string]
    .map((a, i) => (indices.includes(i) ? 0 : a))
    .filter((a) => a !== 0)
    .join("");
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181900
