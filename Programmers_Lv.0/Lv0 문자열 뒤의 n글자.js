// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 숫자와 알파벳으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ n ≤ my_string의 길이

function solution(my_string, n) {
  return my_string.slice(-n);
}
// slice 메소드는 -를 주면 뒤에서 부터 짜를 수 있고, 파라미터로 문자열을 잘라낼 시작 index값(beginIndex)과 마지막 index값(endIndex)
// 메서드 참고 : https://hianna.tistory.com/340
// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181910
