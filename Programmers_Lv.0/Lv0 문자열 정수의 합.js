// 문제 설명
// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ num_str ≤ 100

function solution(num_str) {
  return num_str
    .split("")
    .map((el) => parseInt(el))
    .reduce((a, c) => a + c, 0);
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181849
