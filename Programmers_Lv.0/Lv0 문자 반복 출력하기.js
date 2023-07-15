// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ my_string 길이 ≤ 5
// 2 ≤ n ≤ 10
// "my_string"은 영어 대소문자로 이루어져 있습니다.

function solution(my_string, n) {
  return [...my_string].map((el) => el.repeat(n)).join("");
}
// repeat 메서드는 인자만큼 문자열을 반복해 붙이게 해줌

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120825
